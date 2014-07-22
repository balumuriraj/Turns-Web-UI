//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

"use strict";

app.factory('userFactory', ['$http', function ($http) {

    var baseUrl = 'http://localhost:8080/Turns-API';
    var factory = [];

    return {
        createUser: function(user, $scope){
            return $http({
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                url: baseUrl + '/register',
                method: "POST",
                data: user,
            })
            .success(function(responseData) {
                $scope.response = responseData;
                console.log("Response data : " + responseData.name);
                $scope.loading = false;
                $scope.success = true;
            });
        },
        
        loginUser: function(user, $scope){
            
            return $http({
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Basic ' + 'mbalumur@asu.edu:test'},
                url: baseUrl + '/rest/getDetails',
                method: "GET"
            })
            .success(function(responseData) {
                $scope.response = responseData;
                console.log("Response data : " + responseData.name);
                $scope.loading = false;
            });
        }
    };
    
}]);