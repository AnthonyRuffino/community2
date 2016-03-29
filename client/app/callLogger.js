////////////////////////////
//AngularJs Code
////////////////////////////
function CallLogController($scope, $http) {
    var socket = io.connect();
    
    $scope.logs = [];
    $scope.field1 = '';
    $scope.field2 = '';
    $scope.field3 = '';
    
    socket.on('calllog-log', function (log) {
        $scope.logs.push(log);
        $scope.$apply();
    });
    
    $scope.send = function send() {
        var log = {};
        log.field1 = $scope.field1;
        log.field2 = $scope.field2;
        log.field3 = $scope.field3;
        socket.emit('calllog-log', log);
        $scope.field1 = '';
        $scope.field2 = '';
        $scope.field3 = '';
    };
    
    socket.emit('calllog-get-logs');
    
}


////////////////////////////
//Server Side nodejs code
////////////////////////////
var CallLogServer = {};
CallLogServer.async = null;
CallLogServer.logs = null;
CallLogServer.socketHub = null;

CallLogServer.realm = null;


CallLogServer.init = function(data){
    console.log("Call Logger server initializing.");
    CallLogServer.async = data.async;
    CallLogServer.realm = data.realm;
    CallLogServer.logs = [];
    CallLogServer.socketHub = data;
};


CallLogServer.onConnection = function (socket) {
    console.log("Call Logger server connection.");

    socket.on('calllog-log', function (log) {
        if(log !== undefined && log !== null){
            var field1 = String(log.field1 || '');
            var field2 = String(log.field2 || '');
            var field3 = String(log.field3 || '');
            if (!field1 && !field2 && !field3)
                return;
                
            broadcast('calllog-log', log);
            CallLogServer.logs.push(log);
      }
    });
    
    socket.on('calllog-get-logs', function () {
        CallLogServer.logs.forEach(function (log) {
          socket.emit('calllog-log', log);
        });
    });
    
};
    

function broadcast(event, data) {
  CallLogServer.socketHub.broadcast(event, data);
}


try {
    exports.init = CallLogServer.init;
    exports.onConnection = CallLogServer.onConnection;
}
catch(err) {
    
}