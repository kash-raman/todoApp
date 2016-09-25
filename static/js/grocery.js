  var grocery = angular.module('groceryApp', ["ngRoute"]);

  grocery.config(function($routeProvider){
    $routeProvider.when("/", {
      template : "<H1> welcome</H1>"
    });

  });
