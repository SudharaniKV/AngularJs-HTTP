var app = angular.module("myApp" , []);

// app.config(function($routeprovider){

//     $routeprovider.when("/login",{
//         templateUrl:"views/login.html"
// })
//    .when("/register",{
//     templateUrl :"views/register.html"

// }).

//  when("/about", {
//      templateUrl : "views/about.html"
//  }).

//  when("/contact" ,{
//      templateUrl : "views/contact.html"
//  }).
  
//  otherwise({
//      redirectTo:"/login"
//  })
// })
// Route

app.controller("myCtr" , function($scope , $http){
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function(item){
        $scope.players = item.data;
    })
});
