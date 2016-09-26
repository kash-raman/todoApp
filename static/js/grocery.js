var grocery = angular.module('groceryApp', ["ngRoute"]);

grocery.config(function($routeProvider){
  $routeProvider.when("/", {
    template : "<h1> welcome</h1>"
  });

});
angular.bootstrap(document.getElementById("groceryApplication"), ['groceryApp']);

grocery.controller("groceryMaintainence",function($scope){
  $scope.add = function(){
      return "Added";
  };
});
