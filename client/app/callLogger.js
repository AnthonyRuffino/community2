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
    
    socket.on('calllog-log', function (log) {
        $scope.logs.push(log);
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
    CallLogServer.dirname = "/tmp/ssl/";
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
            
            log.dateTime = moment.format("YYYY-MM-DDHH:mm:ss");
            
            var id = CallLogServer.guid.generate(true,2);
            id = moment.format("HHmmss") + "-" + id;
            log.id = id;
            
            var strJson = JSON.stringify(log, null, 4); 
            mkfile(CallLogServer.dirname + moment.format("YYYY-MM-DD") + "/" + id + ".json",strJson);
                
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

function getDateTime(date) {
    
    var hour = date.getUTCHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getUTCMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getUTCSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getUTCFullYear();

    var month = date.getUTCMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getUTCDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}

function getDate(date) {

    var year = date.getUTCFullYear();

    var month = date.getUTCMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getUTCDate();
    day = (day < 10 ? "0" : "") + day;

    return year + month + day;

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


try {
    exports.init = CallLogServer.init;
    exports.onConnection = CallLogServer.onConnection;
}
catch(err) {
    
}