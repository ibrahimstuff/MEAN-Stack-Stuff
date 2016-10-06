var app = angular.module('Users', ['ng','ngRoute','UserController']);

app.config(function($routeProvider){
   $routeProvider.
    when('/', {
        templateUrl : './template/UsersList.html',
        controller : 'UsersList' 
    }).
    when('/newuser', {
        controller : 'NewUser',
        templateUrl : './template/NewUser.html'
    }).
    when('/user/:id', {
        templateUrl : './template/ViewUser.html',
        controller : 'ViewUser'
    }).
    otherwise({
        redirectTo : '/' 
    });
    
});