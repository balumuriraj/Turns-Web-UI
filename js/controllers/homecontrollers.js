"use strict";

app.controller('login-Controller', [ '$scope', 'userFactory', function ($scope, userFactory) {
    $scope.loading = false;
    $scope.user = {email: '', password: ''};
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            userFactory.loginUser($scope.user, $scope);
            $scope.loading = true;
        }

    };
}]);

app.controller('signup-Controller', [ '$scope', 'userFactory', function ($scope, userFactory) {
    $scope.loading = false;
    $scope.success = false;
    $scope.user = {name: '', email: '', password: ''};
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            userFactory.createUser($scope.user, $scope);
            $scope.loading = true;
        }

    };   
}]);