////////////////////////////
//AngularJs Code
////////////////////////////
var hostDomainName = "ncidence.org";

function ChatController($scope) {
    var socket = io.connect();
    
    $scope.messages = [];
    $scope.roster = [];
    $scope.name = '';
    $scope.text = '';
    
    socket.on('connect', function () {
        $scope.setName();
    });
    
    socket.on('message', function (msg) {
        $scope.messages.push(msg);
        $scope.$apply();
    });
    
    socket.on('roster', function (names) {
        $scope.roster = names;
        $scope.$apply();
    });
    
    $scope.send = function send() {
        console.log('Sending message:', $scope.text);
        socket.emit('message', $scope.text);
        $scope.text = '';
    };
    
    $scope.setName = function setName() {
        var credentials = {};
        credentials.userName = $scope.name;
        credentials.password = $scope.password;
        
        var onHsDataReturned = function(s,n){
            s.emit('identify', n);
        };
        
        socket.emit('identify', $scope.name);
    };
    
    
    
    //PASS THE DOUBLE HASH

    
    var computeH3 = function (hasher, username, password, hs, hip, date) {
        
        $scope.date = date;
        
        var h1 = hasher.hash(password + ":" + hs);
        var h2 = hasher.hash($scope.date + ":" + h1);
        var h3 = hasher.hash(h2 + ":" + hip);
        
        return h3;
    };

    
    
    var authForChat = function (username, password) {
        
        $http.get('/api/getUserSalts?userName=' + username)
        .success(function (salts) {
            
            $scope.getH3(username, password, salts.hs, salts.hip, salts.date);
            
            $http.get('/api/auth?userName=' + username + "&h3=" + $scope.h3 + "&date=" + $scope.date)
            .success(function (authResponse) {
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
ChatServer.messages = null;
ChatServer.sockets = null;
ChatServer.async = null;


ChatServer.init = function(sockets, messages, async){
    console.log("Chat server initializing.");
    ChatServer.sockets = sockets;
    ChatServer.messages = messages;
    ChatServer.async = async;
};


ChatServer.onConnection = function (socket) {
    console.log("Chat server connection.");
    ChatServer.messages.forEach(function (data) {
      socket.emit('message', data);
    });

    ChatServer.sockets.push(socket);

    socket.on('disconnect', function () {
      ChatServer.sockets.splice(ChatServer.sockets.indexOf(socket), 1);
      updateRoster();
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

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
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




try {
    exports.init = ChatServer.init;
    exports.onConnection = ChatServer.onConnection;
}
catch(err) {
    
}