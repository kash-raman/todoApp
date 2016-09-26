var header = angular.module('headerApp', ["ngRoute"]);

header.config(function($routeProvider){
  $routeProvider
  .when("/about",{
    templateUrl: "static/view/header/about.html"
  })
  .when("/contact",{
    templateUrl:"static/view/header/contact.html"

  }).when("/grocery",{
    templateUrl:"static/view/grocery/welcome.html"
  //  controller: "taskList"

  }).when("/grocery/add",{
    templateUrl:"static/view/grocery/add.html"
  })
  .otherwise({ redirectTo: '/grocery' });
});
header.controller("taskList", function($scope){
    $scope.master = [{
    'taskName': "Hello",
    'taskDueDate': "afadsfads"
    }];
});
 header.controller("addTask", function($scope, $location){

  $scope.save = function (){
    $scope.master.push($scope.add);
   $location.path("/grocery");
  }
});

header.run(function($rootScope) {
  $rootScope.master=[{
  'taskName': "Hello",
  'taskDueDate': "hello"
  }];
});
