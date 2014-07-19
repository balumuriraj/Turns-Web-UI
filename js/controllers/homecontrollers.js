app.controller('login-Controller', [ '$scope', function ($scope) {
    $scope.user = {email: '', password: ''};
    // function to submit the form after all validation has occurred			
		$scope.submitForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) {
				alert('our form is amazing');
			}

		};
}]);

app.controller('signup-Controller', [ '$scope', 'userFactory', function ($scope, userFactory) {
    $scope.user = {name: '', email: '', password: ''};
    // function to submit the form after all validation has occurred			
		$scope.submitForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) {
				userFactory.createUser($scope.user);
			}

		};
}]);