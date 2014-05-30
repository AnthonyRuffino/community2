function TodoCtrl($scope, $http) {

    var dataKey = 'ToDoList';

    $http.get('/api/data?key=' + dataKey).
    success(function (data) {
        $scope.todos = data;
    });

    $scope.todos = {};

    $scope.error = null;

    $scope.addTodo = function () {

        $scope.error = null;

        if ($scope.todoText != null && $scope.todoText.length > 0) {
            $http({
                url: '/api/data?key=' + dataKey,
                dataType: 'json',
                method: 'POST',
                data: '={"text":"' + $scope.todoText + '","done":false}',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }

            }).success(function (response) {
                $scope.todos[response.id] = { text: $scope.todoText, done: false };
                $scope.todoText = '';
            }).error(function (error) {
                $scope.error = error.Message;
            });
        }
        else {
            $scope.error = 'You must enter a value.';
        }


    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.finished = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 1 : 0;
        });
        return count;
    };


    $scope.count = function () {
        var count = Object.keys($scope.todos).length;
        return count;
    };

    $scope.remove = function () {

        $scope.error = null;

        if ($scope.finished() > 0) {
            var oldTodos = $scope.todos;
            $scope.todos = {};
            angular.forEach(oldTodos, function (value, key) {
                if (!value.done) {
                    $scope.todos[key] = value;
                }
                else {
                    $http({
                        url: '/api/data?key=' + dataKey + '&id=' + key,
                        dataType: 'json',
                        method: 'DELETE',
                        data: '',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }

                    }).success(function (response) {
                        if (response.deleted) {

                        }
                        else {
                            $scope.error += "[" + key + ' was not deleted' + error.Message + "]";
                        }
                    }).error(function (error) {
                        $scope.error = error.Message;
                    });
                }
            });
        }
        else {
            $scope.error = 'Nothing to remove';
        }
    };
}