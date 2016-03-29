////////////////////////////
//AngularJs Code
////////////////////////////
var hostDomainName = "ncidence.org";
var systemSalt = "RANDOMIZE_THIS_VALUE_ON_PRODUCTION_SERVERS";

function ChatController($scope, $http) {
    var socket = io.connect();
    
    $scope.logs = [];
    $scope.field1 = '';
    $scope.field2 = '';
    $scope.field3 = '';
    
    socket.on('connect', function () {
        //$scope.getName();
    });
    
    socket.on('log', function (log) {
        $scope.logs.push(log);
        $scope.$apply();
    });
    
    $scope.send = function send() {
        var log = {};
        log.field1 = $scope.field1;
        log.field2 = $scope.field2;
        log.field3 = $scope.field3;
        socket.emit('log', log);
        $scope.field1 = '';
        $scope.field2 = '';
        $scope.field3 = '';
    };
    
}


////////////////////////////
//Server Side nodejs code
////////////////////////////
var ChatServer = {};
ChatServer.async = null;

ChatServer.logs = null;
ChatServer.sockets = null;
ChatServer.sessions = null;

ChatServer.realm = null;


ChatServer.init = function(data){
    console.log("Call Logger server initializing.");
    ChatServer.async = data.async;
    ChatServer.logs = [];
    ChatServer.sockets = [];
    ChatServer.realm = hostDomainName;
};


ChatServer.onConnection = function (socket) {
    console.log("Call Logger server connection.");
    
    ChatServer.logs.forEach(function (log) {
      socket.emit('log', log);
    });
    
    ChatServer.sockets.push(socket);

    socket.on('disconnect', function () {
        ChatServer.sockets.splice(ChatServer.sockets.indexOf(socket), 1);
    });

    socket.on('log', function (log) {
        if(log !== undefined && log !== null){
            var field1 = String(log.field1 || '');
            var field2 = String(log.field2 || '');
            var field3 = String(log.field3 || '');
            if (!field1)
                return;
                
            broadcast('log', log);
            ChatServer.logs.push(log);
      }
      
    });
    
};
    

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