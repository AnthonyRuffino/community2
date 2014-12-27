////////////////////////////
//AngularJs Code
////////////////////////////
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
      socket.emit('identify', $scope.name);
    };
}


////////////////////////////
//Server Side nodejs code
////////////////////////////
var ChatServer = {};
ChatServer.messages = null;
ChatServer.sockets = null;
ChatServer.async = null;
ChatServer.messages = null;
ChatServer.sockets = null;


ChatServer.init = function(data){
    console.log("Chat server initializing.");
    ChatServer.async = data.async;
    ChatServer.messages = [];
    ChatServer.sockets = [];
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
        console.log("IDENTIFY: " + name);
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