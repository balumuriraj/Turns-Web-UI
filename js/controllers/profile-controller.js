/**
 * Created by MohanRaj on 8/9/2014.
 */

app.controller('profile-Controller', [ '$scope', 'authService', function ($scope, authService) {

    $scope.currentuser = {'name':'', 'email':'', 'activities':'', 'friends':''};

    authService.getUserDetails()
        .success(function(responseData) {
            $scope.currentuser.name = responseData.name;
            $scope.currentuser.email = responseData.email;
            $scope.currentuser.activities = responseData.groups;
            $scope.currentuser.friends = responseData.friends;
        });
}]);