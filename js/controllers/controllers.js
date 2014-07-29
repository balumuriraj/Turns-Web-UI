//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view

app.controller('god-Controller', [ '$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.userloggedin;
    $scope.userdetails = {'name': '', 'email': '', 'friends': '', 'groups': ''};

    if(authService.isLoggedIn())
    {
        $scope.userloggedin = {'value': true};
        authService.getUserDetails()
            .success(function(responseData) {
                $scope.userdetails.name = responseData.name;
                $scope.userdetails.email = responseData.email;
                $scope.userdetails.friends = responseData.friends;
                $scope.userdetails.groups = responseData.groups;
            });
    }
    else{
        $scope.userloggedin = {'value': false};
        $scope.userdetails = {'name': '', 'email': '', 'friends': '', 'groups': ''};
    }

    $scope.signout = function() {
        authService.logoutUser();
        $scope.userloggedin.value = false;
        $scope.userdetails = {'name': '', 'email': '', 'friends': '', 'groups': ''};
        $location.path('/login');
    }

}]);

app.controller('main-Controller', [ '$scope', function ($scope) {

    $scope.activities = [
        {
            'objectID': '123',
            'name': 'Roomies'
        },
        {
            'objectID': '234',
            'name': 'Dinner'
        },
        {
            'objectID': '345',
            'name': 'Lunch'
        },
        {
            'objectID': '456',
            'name': 'Washing'
        }
    ];

    $scope.friends = ['Robin Van Persie', 'Shinjin Kagawa', 'Juan Mata', 'Ander Herera'];

}]);



