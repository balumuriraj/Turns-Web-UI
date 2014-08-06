/**
 * Created by MohanRaj on 7/27/2014.
 */


app.controller('activities-Controller', [ '$scope', function ($scope) {

    $scope.feeds = { 'results': [
        {
            'date': new Date(),
            'name': 'Rooney',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Robin Van Persie',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Shinjin Kagawa',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Rooney',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Robin Van Persie',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Juan Mata',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Ander Herera',
            'status': 'done'
        },
        {
            'date': new Date(),
            'name': 'Juan Mata',
            'status': 'done'
        }
    ]}

}]);

app.controller('activity-Controller', [ '$scope', '$routeParams', '$filter', 'activityService', 'authService', function ($scope, $routeParams, $filter, activityService, authService) {

    var activityId = $routeParams.activityId;

    $scope.loading = false;
    $scope.inputerror = false;
    $scope.deleteloading = false;

    $scope.userinfo = {
        'name': '',
        'email': ''
    };

    $scope.mainuser = {
        'name': '',
        'email': '',
        'activities': ''
    }

    $scope.turn = {
        'emailId': '',
        'groupId': activityId
    };

    $scope.init = function () {

        console.log("Getting user details...");
        authService.getUserDetails()
            .success(function(responseData) {
                $scope.userinfo.name = responseData.name;
                $scope.userinfo.email = responseData.email;

                $scope.turn.emailId = responseData.email;

                $scope.mainuser.name = responseData.name;
                $scope.mainuser.email = responseData.email;
                $scope.mainuser.activities = responseData.groups;

                $scope.currentactivity = $filter('filter')($scope.mainuser.activities, {id: activityId})[0];
            });

        console.log("Calling Group id: " + activityId);
        activityService.getActivityLog(activityId)
            .success(function(responseData) {
                console.log("Success.............................");
                $scope.logs = responseData;
            });

    };

    $scope.init();

    $scope.selectmember = function(member) {
        $scope.userinfo.name = member.name;
        $scope.userinfo.email = member.emailId;
        $scope.turn.emailId = member.emailId;
        closememberlist();
    };

    $scope.selectactivity = function(activity) {
        $scope.currentactivity = $filter('filter')($scope.mainuser.activities, {id: activity.id})[0];
        $scope.userinfo.name = $scope.mainuser.name;
        $scope.userinfo.email = $scope.mainuser.email;
        $scope.turn.emailId = $scope.mainuser.email;
        $scope.turn.groupId = activity.id;
        closeactivitylist();
    };

    $scope.submitturn = function () {
        $scope.loading = true;
        console.log("Adding turn...");
        activityService.addTurn($scope)
            .success(function(responseData) {
                console.log("Add turn Success.............................");
                closeaddturn();
                console.log("Calling Group id: " + activityId);
                activityService.getActivityLog(activityId)
                    .success(function(responseData) {
                        console.log("Success.............................");
                        $scope.logs = responseData;
                    });
            });

    };

    $scope.deleteturn = function(logid) {
        $scope.deletelog = {'logId': logid};
        $scope.deleteloading = true;

        console.log("Deleting turn...");
        activityService.deleteTurn($scope)
            .success(function(responseData) {
                console.log("delete turn Success.............................");
                $scope.deleteloading = false;
                console.log("Calling Group id: " + activityId);
                activityService.getActivityLog(activityId)
                    .success(function(responseData) {
                        console.log("Success.............................");
                        $scope.logs = responseData;
                    });
            });
    };

}]);

app.controller('add-activity-Controller', [ '$scope', 'activityService', 'authService', function ($scope, activityService, authService) {

    $scope.userinfo = {'name': '', 'emailId': ''};
    $scope.loading = false;
    $scope.colors = {
        id: ['#f06060', '#7ea568', '#fbc73b', '#47a3da', '#34495e']
    };
    $scope.icons = {
        id: ['icon-cart3', 'icon-food', 'icon-home22', 'icon-paint-format', 'icon-rocket3','icon-food2', 'icon-t-shirt', 'icon-moneybag', 'icon-fire', 'icon-leaf']
    };
    $scope.activity = {
        name: '',
        color: '#f06060',
        icon: 'icon-rocket3',
        members: []
    };
    $scope.changecolor = function(color) {
        $scope.activity.color = color;
    };
    $scope.changeicon = function(icon) {
        $scope.activity.icon = icon;
    };
    $scope.inviteFriend = function() {
        $scope.activity.members.push({'name': '', 'emailId': ''});
    };
    $scope.removeFriend = function(index) {
        $scope.activity.members.splice(index,1);
    };

    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            activityService.addActivity($scope.activity, $scope)
                .success(function() {
                    $scope.addActivityForm.$setPristine();
                    authService.getUserDetails()
                        .success(function(responseData) {
                            $scope.userdetails.name = responseData.name;
                            $scope.userdetails.email = responseData.email;
                            $scope.userdetails.friends = responseData.friends;
                            $scope.userdetails.groups = responseData.groups;
                        });
                });
            $scope.loading = true;
        }

    };

    $scope.init = function () {
        authService.getUserDetails()
            .success(function(responseData) {
                $scope.userinfo.name = responseData.name;
                $scope.userinfo.emailId = responseData.email;

                $scope.activity.members.push($scope.userinfo);
            });
    };

    $scope.init();

}]);

app.controller('all-activities-Controller', [ '$scope', '$location', function ($scope, $location) {

    $scope.addactivity = function() {
        $location.path('/activities/addActivity');
    };

    $scope.openactivity = function(id) {
        $location.path('/activities/'+id);
    };

}]);