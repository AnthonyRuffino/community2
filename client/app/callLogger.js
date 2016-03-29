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
            var field1 = String(log.insuranceType || '');
            var field2 = String(log.appointmentReason || '');
            var field3 = String(log.schedulingStatus || '');
            if (!field1 && !field2 && !field3)
                return;
                
            log.dateTime = getDateTime();
                
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

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}


try {
    exports.init = CallLogServer.init;
    exports.onConnection = CallLogServer.onConnection;
}
catch(err) {
    
}