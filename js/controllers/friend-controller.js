/**
 * Created by MohanRaj on 7/27/2014.
 */

app.controller('friends-Controller', [ '$scope', '$location', 'authService', 'friendService', function ($scope, $location, authService, friendService) {

    $scope.loading = false;
    $scope.inputerror = false;
    $scope.friend = {name: '', emailId: ''};
    // function to submit the form after all validation has occurred
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            friendService.addFriend($scope.friend, $scope)
                .success(function() {
                    $scope.friend = {name: '', emailId: ''};
                    $scope.addfriendForm.$setPristine();
                    authService.getUserDetails()
                        .success(function(responseData) {
                            $scope.userdetails.name = responseData.name;
                            $scope.userdetails.email = responseData.email;
                            $scope.userdetails.friends = responseData.friends;
                            $scope.userdetails.groups = responseData.groups;
                        });
                    $('#addfriend-container').toggle();
                });
            $scope.loading = true;
            $scope.inputerror = false;
        }

    };

    $scope.gotofriend = function(email) {
       $location.path('/friends/'+email);
    };

}]);

app.controller('friend-Controller', [ '$scope', 'authService', 'friendService', function ($scope, authService, friendService) {


}]);