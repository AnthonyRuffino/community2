function LogCtrl($scope, $http) {

    var dataKey = 'NCDC_Logs';

    $http.get('/api/data?key=' + dataKey).
    success(function (data) {
        $scope.logs = data;
    });


    $scope.logs = {};

    $scope.error = null;

    $scope.addLog = function () {

        $scope.error = null;

        if ($scope.logTitle != null && $scope.logTitle.length > 0
            && $scope.logDate != null && $scope.logTitle.length > 0
            && $scope.logText != null && $scope.logText.length > 0) {
            $http({
                url: '/api/data?key=' + dataKey,
                dataType: 'json',
                method: 'POST',
                data: '={"logText":"' + $scope.logText + '","logDate":"' + $scope.logDate + '","logTitle":"' + $scope.logTitle + '"}',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }

            }).success(function (response) {
                $scope.logs[response.id] = { logTitle: $scope.logTitle, logText: $scope.logText, logDate: $scope.logDate };
                $scope.logText = '';
                $scope.logDate = '';
                $scope.logTitle = '';
            }).error(function (error) {
                $scope.error = error.Message;
            });
        }
        else {
            $scope.error = 'All values are required.';
        }

    };

    $scope.count = function () {
        var count = Object.keys($scope.logs).length;
        return count;
    };

}