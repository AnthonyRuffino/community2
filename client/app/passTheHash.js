function PassTheHashCtrl($scope, $http) {
    $scope.isValid = false;
    
    
    $scope.hash = function (inputText) {
        var hashedOutput = Sha256.hash(inputText);
        window.console.log('Hash: ' + hashedOutput);
        $scope.hashedOutput = hashedOutput;
    };
    
    $scope.getH3 = function (username, password, hs, hip, date) {
        
        $scope.date = date;
        
        var h1 = Sha256.hash(password + ":" + hs);
        var h2 = Sha256.hash($scope.date + ":" + h1);
        var h3 = Sha256.hash(h2 + ":" + hip);
        
        $scope.h3 = h3;
    };

    
    
    $scope.auth = function (username, password) {
        
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