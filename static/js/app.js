  var app = angular.module('todoApp', ["ngRoute"]);
  app.run(function($rootScope){
    $rootScope.test="Hello root";
  });
  app.config(function($routeProvider){
    $routeProvider.when("/", {
      template : "<H1> welcome</H1>"
    })
    .when("/binder", {
      templateUrl : "static/view/1bind.html"
    }).when("/one", {
      templateUrl : "static/view/test.html"
    });
  });
  app.controller('twoWayBindingCtrl', function($scope) {
    $scope.test="Hello control";
      $scope.fullname = function() {
          return $scope.first + " " + $scope.last;
      };
  });
  app.controller('loopme', function($scope) {
      $scope.names = ['Jani', 'Hege', 'Kai'];
  });
  app.directive("loopDirective", function() {
      return {
          template: "Utilizing custom directive and ng-repeat"
      };
  });
