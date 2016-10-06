var userController = angular.module('UserController',[]);

userController.controller('UsersList', ['$scope', '$http', function($scope, $http){
    
    $http.get('/api/v1/users').
        success(function(data){
            return $scope.usersList = data.users;
        });
        
    $scope.contactOrder = 'Name';
    
}]);

userController.controller('NewUser', ['$scope', '$http', function ($scope, $http) {
    
    $http.get('/api/v1/users').
        success(function(data){
            return $scope.userLen = data.users.length;
        });
    
    $scope.addUser = function(user){
        
        $scope.user._id = $scope.user.PhoneNumber;
        
        $http({
            url : '/api/v1/users',
            method : 'POST',
            data : user
        }).success(function(data){
            $scope.updated = true;
            return window.location.href='#/';
        });
            
    };
      
}]);

userController.controller('ViewUser', ['$scope','$http','$routeParams', function($scope, $http, $routeParams){
        $scope.id = $routeParams.id;
        $http.get('/api/v1/user/' + $scope.id).
            success(function(data){
                console.log(data);
               return $scope.user = data[0];
            });
}]);