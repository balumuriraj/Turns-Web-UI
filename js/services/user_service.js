//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

app.factory('userFactory', ['$http', function ($http) {

    var baseUrl = 'http://localhost:8080/Turns-API';
    var factory = [];

    return {
        createUser: function(user){
            return $http({
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                url: baseUrl + '/register',
                method: "POST",
                data: user,
            })
            .success(function(responseData) {
                factory = responseData;
                console.log("Response data : " + responseData);
            });
        }
    };
}]);