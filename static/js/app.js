  var app = angular.module('todoApp',[]);

  app.controller('twoWayBindingCtrl', function twoWayBindingCtrl($scope){
//    $scope.todos = [{name="Tomatoes", store= "american"},  {name="Curry leaves", store= "indian"}];
    $scope.fullname = $scope.first + " " +$scope.last;
  });
