////////////////////////////
//AngularJs Code
////////////////////////////
function CallLogController($scope, $http) {
    var socket = io.connect();
    
    
    $scope.insuranceTypes = [];
    $scope.insuranceTypes.push({ name: '--Select One--', value: null });
    $scope.insuranceTypes.push({ name: 'Commercial', value: 'Commercial' });
    $scope.insuranceTypes.push({ name: 'Medicare', value: 'Medicare' });
    $scope.insuranceTypes.push({ name: 'Medicaid', value: 'Medicaid' });
    $scope.insuranceTypes.push({ name: 'SelfPay', value: 'SelfPay' });
    $scope.selectedInsuranceTypeOption = $scope.insuranceTypes[0];
    
    $scope.appointmentReasons = [];
    $scope.appointmentReasons.push({ name: '--Select One--', value: null });
    $scope.appointmentReasons.push({ name: 'Mental Health - MEDMGMT', value: 'Mental Health - MEDMGMT' });
    $scope.appointmentReasons.push({ name: 'Mental Health - THERAPY', value: 'Mental Health - THERAPY' });
    $scope.appointmentReasons.push({ name: 'Substance Abuse - MEDMGMT', value: 'Substance Abuse - MEDMGMT' });
    $scope.appointmentReasons.push({ name: 'Substance Abuse - THERAPY', value: 'Substance Abuse - THERAPY' });
    $scope.appointmentReasons.push({ name: 'Evals (Non DUI)', value: 'Evals (Non DUI)' });
    $scope.appointmentReasons.push({ name: 'DUI', value: 'DUI' });
    $scope.selectedAppointmentReasonOption = $scope.appointmentReasons[0];
    
    $scope.schedulingStatuses = [];
    $scope.schedulingStatuses.push({ name: '--Select One--', value: null });
    $scope.schedulingStatuses.push({ name: 'Appointment Set', value: 'Appointment Set' });
    $scope.schedulingStatuses.push({ name: 'Referred Elsewhere', value: 'Referred Elsewhere' });
    $scope.schedulingStatuses.push({ name: 'Message Left', value: 'Message Left' });
    $scope.schedulingStatuses.push({ name: 'Caller Declined to Set Appointment', value: 'Caller Declined to Set Appointment' });
    $scope.schedulingStatuses.push({ name: 'Psych Express', value: 'Psych Express' });
    $scope.selectedSchedulingStatusOption = $scope.schedulingStatuses[0];
    
    $scope.logs = [];
    
    $scope.allLogs = [];
    
    socket.on('calllog-log', function (log) {
        $scope.logs.push(log);
        $scope.$apply();
    });
    
    socket.on('calllog-clear-all-logs', function () {
        $scope.allLogs = [];
    });
    
    socket.on('calllog-all-logs', function (log) {
        $scope.allLogs.push(log);
        $scope.$apply();
    });
    
    $scope.send = function send() {
        var log = {};
        log.insuranceType = $scope.selectedInsuranceTypeOption.value;
        log.appointmentReason = $scope.selectedAppointmentReasonOption.value;
        log.schedulingStatus = $scope.selectedSchedulingStatusOption.value;
        socket.emit('calllog-log', log);
        $scope.selectedInsuranceTypeOption = $scope.insuranceTypes[0];
        $scope.selectedAppointmentReasonOption = $scope.appointmentReasons[0];
        $scope.selectedSchedulingStatusOption = $scope.schedulingStatuses[0];
    };
    
    $scope.getLogs = function getLogs() {
        socket.emit('calllog-get-all-logs');
    };
    
}


////////////////////////////
//Server Side nodejs code
////////////////////////////
var CallLogServer = {};
CallLogServer.async = null;
CallLogServer.guid = null;
CallLogServer.logs = null;
CallLogServer.socketHub = null;
CallLogServer.fs = null;
CallLogServer.mkpath = null;
CallLogServer.path = null;
CallLogServer.dirname = null;
CallLogServer.moment = null;

CallLogServer.realm = null;


CallLogServer.init = function(data){
    console.log("Call Logger server initializing.");
    CallLogServer.async = data.async;
    CallLogServer.guid = data.guid;
    CallLogServer.realm = data.realm;
    CallLogServer.logs = [];
    CallLogServer.socketHub = data.socketHub;
    CallLogServer.fs = data.fs;
    CallLogServer.mkpath = data.mkpath;
    CallLogServer.path = data.path;
    CallLogServer.dirname = "/tmp/ssl/calllogs";
    CallLogServer.moment = data.moment;
};


CallLogServer.onConnection = function (socket) {
    console.log("Call Logger server connection.");

    socket.on('calllog-log', function (log) {
        if(log !== undefined && log !== null){
            var field1 = String(log.insuranceType || '');
            var field2 = String(log.appointmentReason || '');
            var field3 = String(log.schedulingStatus || '');
            if (!field1 && !field2 && !field3)
                return;
            
            
            var moment = CallLogServer.moment();
            // convert using the TZDB identifier for US Central time
            moment.tz('America/Chicago');
            
            log.dateTime = moment.format("YYYY-MM-DD HH:mm:ss");
            
            var id = CallLogServer.guid.generate(true,2);
            id = moment.format("HHmmss") + "-" + id;
            log.id = id;
            
            var strJson = JSON.stringify(log, null, 4); 
            mkfile(CallLogServer.dirname + "/" + moment.format("YYYY-MM-DD") + "/" + id + ".json",strJson);
                
            broadcast('calllog-log', log);
            CallLogServer.logs.push(log);
      }
    });
    
    socket.on('calllog-get-all-logs', function () {
        
        
        
        socket.emit('calllog-clear-all-logs');
        
        walk(CallLogServer.dirname, function(err, results) {
          if (err) throw err;
          results.forEach(function (result) {
              socket.emit('calllog-all-logs', result);
          });
        });
    });
};
    

function broadcast(event, data) {
  CallLogServer.socketHub.broadcast(event, data);
}


// You probably want to pass in a callback to this function to send back errors, normally
var mkfile = function (filepath, data) {
    console.log("Saving file: " + filepath);
    CallLogServer.mkpath(CallLogServer.path.dirname(filepath), function (err) {
        if (err) {
            console.log(err);
        } else {
            CallLogServer.fs.writeFile(filepath, data, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("The file was saved!");
                }
            }); 
        }
    });
};



var walk = function(dir, done) {
  var results = [];
  CallLogServer.fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      CallLogServer.fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
            CallLogServer.fs.readFile(file, 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
              results.push({result:data});
            });
          next();
        }
      });
    })();
  });
};



try {
    exports.init = CallLogServer.init;
    exports.onConnection = CallLogServer.onConnection;
}
catch(err) {
    
}