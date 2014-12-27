////////////////////////////
//AngularJs Code
////////////////////////////
var hostDomainName = "ncidence.org";
var systemSalt = "RANDOMIZE_THIS_VALUE_ON_PRODUCTION_SERVERS";

function ChatController($scope, $http) {
    var socket = io.connect();
    
    $scope.messages = [];
    $scope.roster = [];
    $scope.name = '';
    $scope.text = '';
    
    socket.on('connect', function () {
        //$scope.getName();
    });
    
    socket.on('message', function (msg) {
        $scope.messages.push(msg);
        $scope.$apply();
    });
    
    socket.on('roster', function (names) {
        $scope.roster = names;
        $scope.$apply();
    });
    
    socket.on('setName', function (data) {
        $scope.name = data.name;
        $scope.$apply();
    });
    
    $scope.send = function send() {
        console.log('Sending message:', $scope.text);
        socket.emit('message', $scope.text);
        $scope.text = '';
    };
    
    
    $scope.getName = function getName() {
        socket.emit('getName');
    };
    
    
    
    //PASS THE DOUBLE HASH

    
    var computeH3 = function (hasher, username, password, hs) {
        return hasher.hash(password + ":" + hs);
    };
    
    var authForChat = function (username, password) {
        
        $http.get('/api/getUserSalts?userName=' + username)
        .success(function (salts) {
            
            var h3 = computeH3(Sha256, username, password, salts.hs);
            
            $http({
                url: '/api/auth',
                dataType: 'json',
                method: 'POST',
                data: 'bodyvalue={"userName":"' + username + '","h3":' + h3 + '}',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).success(function (authResponse) {
                $scope.isValid = authResponse.isValid;
            }).error(function (authErrorResponse) {
                $scope.isValid = false;
                $scope.error = 'authIssue: ' + authErrorResponse.Message;
            });
            
        }).error(function (saltsError) {
            $scope.isValid = false;
            $scope.error = 'getSaltsIssue: ' + saltsError.Message;
        });
    };
    
    
}


////////////////////////////
//Server Side nodejs code
////////////////////////////
var ChatServer = {};
ChatServer.async = null;
//ChatServer.deleteKey = null;
ChatServer.guidFactory = null;

ChatServer.messages = null;
ChatServer.sockets = null;
ChatServer.sessions = null;

ChatServer.realm = null;

ChatServer.users = {};

var LOGIN_EXCEPTION_MESSAGE = "No user found/incorrect password.";
    
var spaarks = {};
spaarks.salt = "0739cb06-cd9e-b692-4725-42f2d29eced7";
spaarks.h1 = "a0b90a3d64c55b75f98e08617f5302a37029cfee9c2ed4ab86e09b240ffcad33";
ChatServer.users["spaarks"] = spaarks;


ChatServer.init = function(data){
    console.log("Chat server initializing.");
    ChatServer.async = data.async;
    ChatServer.hasher = data.hasher;
    //ChatServer.deleteKey = data.deleteKey;
    //ChatServer.bcrypt = data.bcrypt;
    ChatServer.guidFactory = data.guidFactory;
    ChatServer.messages = [];
    ChatServer.sockets = [];
    ChatServer.sessions = {};
    ChatServer.realm = hostDomainName;
};


ChatServer.onConnection = function (socket) {
    console.log("Chat server connection.");
    
    ChatServer.sockets.push(socket);
    
    //Get first 6 values of guid. This will be the session id of anonomous 
    var guid = ChatServer.guidFactory.generate(true, 2);
    
    //Initialize session as Anonymous and un-authorized
    var session = {};
    session.userName = 'Anonymous-' + guid;
    session.guid = guid;
    session.isAuthorized = false;
    
    //place session in the ChatServer.sessions array
    //ChatServer.sessions[session.userName] = session;
    
    socket.set('name', String(session.userName), function (err) {
        updateRoster();
    });
    
    
    socket.emit('setName', { name: session.userName });
    
    ChatServer.messages.forEach(function (data) {
      socket.emit('message', data);
    });

    

    socket.on('disconnect', function () {
        socket.get('name', function (err, name) {
            //ChatServer.deleteKey(ChatServer.sessions, name);
            ChatServer.sockets.splice(ChatServer.sockets.indexOf(socket), 1);
            updateRoster();
        });
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        ChatServer.messages.push(data);
      });
    });
    
    
    
    socket.on('getName', function (msg) {
      socket.get('name', function (err, name) {
        var data = {
          name: name
        };
        socket.emit('setName', data);
      });
    });

    socket.on('authorize', function (credentials) {
        socket.get('name', function (getErr, oldName) {
            socket.set('name', String(credentials.userName || 'Anonymous'), function (setErr) {
                updateRoster();
            });
        });
    });
};
    
function updateRoster() {
  ChatServer.async.map(
    ChatServer.sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  ChatServer.sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}









ChatServer.getUser = function(userName) {
    return ChatServer.users[userName];
};


ChatServer.getUserSalts = function(inputData) {
      
    if(inputData.userName !== undefined && inputData.userName != null && inputData.userName !== '' && inputData.userName.length > 0){
        var user = ChatServer.getUser(inputData.userName);
        var salts = {};
        
        
        if(user !== undefined && user != null){
            
        }else{
            user = {};
            user.salt = systemSalt;
        }

        salts.userName = inputData.userName;
        
        if(inputData.isClientCall !== undefined && inputData.isClientCall != null && inputData.isClientCall === true){
            salts.hs = ChatServer.hasher.hash(salts.userName + "@" + ChatServer.realm + ":" + user.salt);
        }else{
            salts.h1 = user.h1;
            salts.salt = user.salt;
        }
        
        return salts;
    
    }else{
        return {errorMessage:"No userName passed!"};
    }
    

};


ChatServer.authorize = function(userName, secret) {
    
    var salts = ChatServer.getUserSalts({userName:userName, isClientCall:true});
    
    var h1 = salts.h1;
    
    var salt = salts.salt;
    
    var isValid = false;
    
    var auth = {};

    if(secret !== undefined && secret != null){
        if(userName !== undefined && userName != null){
            
            if(h1 !== undefined && h1 != null){
                var h2 = ChatServer.hasher.hash(secret + ":" + salt);
                
                if(h1 === h2){
                    isValid = true;
                }
                else{
                    auth.error = LOGIN_EXCEPTION_MESSAGE;
                }
            }else{
                auth.error = LOGIN_EXCEPTION_MESSAGE;
            }
            
        }else{
            auth.error = "userName was not set!";
        }
    }else{
        auth.error = "secret was not set!";
    }
    
    auth.isValid = isValid;
    
	return auth;
}








try {
    exports.init = ChatServer.init;
    exports.onConnection = ChatServer.onConnection;
    
    exports.getUser = ChatServer.getUser;
    exports.getUserSalts = ChatServer.getUserSalts;
    exports.authorize = ChatServer.authorize;
}
catch(err) {
    
}