var drawingApp = angular.module("drawingApp", []);




drawingApp.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});



var angularDrawing = function(){
  return {
    restrict: "A",
    link: function(scope, element){
      var ctx = element[0].getContext('2d');

      // variable that decides if something should be drawn on mousemove
      var drawing = false;

      // the last coordinates before the current move
      var lastX;
      var lastY;

      element.bind('mousedown', function(event){
        if(event.offsetX!==undefined){
          lastX = event.offsetX;
          lastY = event.offsetY;
        } else { // Firefox compatibility
          lastX = event.layerX - event.currentTarget.offsetLeft;
          lastY = event.layerY - event.currentTarget.offsetTop;
        }

        // begins new line
        ctx.beginPath();

        drawing = true;
      });
      element.bind('mousemove', function(event){
        if(drawing){
          // get current mouse position
          var currentX;
          var currentY;
          if(event.offsetX!==undefined){
            currentX = event.offsetX;
            currentY = event.offsetY;
          } else {
            currentX = event.layerX - event.currentTarget.offsetLeft;
            currentY = event.layerY - event.currentTarget.offsetTop;
          }

          draw(lastX, lastY, currentX, currentY);

          // set current coordinates to last one
          lastX = currentX;
          lastY = currentY;
        }

      });
      element.bind('mouseup', function(event){
        // stop drawing
        drawing = false;
      });

      // canvas reset
      function reset(){
       element[0].width = element[0].width; 
      }

      function draw(lX, lY, cX, cY){
        // line from
        ctx.moveTo(lX,lY);
        // to
        ctx.lineTo(cX,cY);
        // color
        ctx.strokeStyle = "#4bf";
        // draw it
        ctx.stroke();
      }
    }
  };
};







function DrawController($scope, socket) {
    
    $scope.messages = [];
    $scope.roster = [];
    $scope.name = '';
    $scope.text = '';
    
    socket.on('connect', function () {
      $scope.setName();
    });
    
    socket.on('message', function (msg) {
      $scope.messages.push(msg);
      //$scope.$apply();
    });
    
    socket.on('roster', function (names) {
      $scope.roster = names;
      //$scope.$apply();
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













drawingApp.controller('DrawController', DrawController);
drawingApp.directive('drawing', angularDrawing);

















var things = (function () {
  var data = {};

  var add = function (key, value) {
    data[key] = value;
  };

  var get = function (key) {
    return data[key];
  };

  // serialize things as an array
  var getAll = function () {
    var responseArray = [];
    for (var thing in data) {
      responseArray.push(thing);
    }

    return responseArray;
  };

  var rem = function (key) {
    if (data[key]) {
      delete data[key];
    }
  };

  return {
    add: add,
    get: get,
    getAll: getAll,
    rem: rem
  };
}());