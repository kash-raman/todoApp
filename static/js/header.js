var header = angular.module('headerApp', ["ngRoute"]);

header.config(function($routeProvider){
  $routeProvider.when("/", {
    template : ""
  })
  .when("/about",{
    templateUrl: "static/view/header/about.html"
  })
  .when("/contact",{
    templateUrl:"static/view/header/contact.html"

  });
});
