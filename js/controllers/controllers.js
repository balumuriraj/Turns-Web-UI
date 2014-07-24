//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view

app.controller('god-Controller', [ '$scope', function ($scope) {

    $scope.userloggedin = {'value': false};

}]);

app.controller('login-Controller', [ '$scope', '$location', 'authService', function ($scope, $location, authService) {
    $scope.loading = false;
    $scope.loginerror = false;
    $scope.user = {email: '', password: ''};
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            authService.loginUser($scope.user, $scope)
                .success(function(responseData) {
                    
                    $scope.userloggedin.value = true;
                    $location.path('/dashboard');
                });
            $scope.loading = true;
            $scope.loginerror = false;
        }

    };
}]);

app.controller('signup-Controller', [ '$scope', 'authService', function ($scope, authService) {
    $scope.loading = false;
    $scope.success = false;
    $scope.user = {name: '', email: '', password: ''};
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            authService.createUser($scope.user, $scope);
            $scope.loading = true;
        }

    };   
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

app.controller('dashboard-Controller', [ '$scope', function ($scope) {

    $scope.notifications = { 'results': [
        {
            'activity': 'Roomies',
            'icon': 'rocket3',
            'color': 'fbc73b'
        },
        {
            'activity': 'Dinner',
            'icon': 'rocket3',
            'color': '47a3da'
        },
        {
            'activity': 'Lunch',
            'icon': 'rocket3',
            'color': '7ea568'
        },
        {
            'activity': 'Washing',
            'icon': 'rocket3',
            'color': 'f06060'
        }

    ]}
}]);

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

app.controller('activity-Controller', [ '$scope', function ($scope) {

    $scope.feeds = { 
        'objectID': '123',
        'name': 'Roomies',
        'icon': 'rocket3',
        'color': 'fbc73b',
        'activity_type': 'daily',
        'members': [
            {
                'name': 'Wayne Rooney',
                'pic': 'http://img.uefa.com/imgml/TP/players/14/2012/324x324/63891.jpg',
                'turns_completed': 3
            },
            {
                'name': 'Shinjin Kagawa',
                'pic': 'http://img.uefa.com/imgml/TP/players/1/2012/324x324/250021739.jpg',
                'turns_completed': 2
            },
            {
                'name': 'Juan Mata',
                'pic': 'http://img.uefa.com/imgml/TP/players/9/2013/324x324/104584.jpg',
                'turns_completed': 2
            },
            {
                'name': 'Robin Van Persie',
                'pic': 'http://img.uefa.com/imgml/TP/players/1/2014/324x324/53130.jpg',
                'turns_completed': 1
            }
        ],
        'log': [
            {
                'date': '2014-07-07T03:47:29.687Z',
                'name': 'Wayne Rooney',
                'status': 'done'
            },
            {
                'date': '2014-07-06T03:47:29.687Z',
                'name': 'Robin Van Persie',
                'status': 'done'
            },
            {
                'date': '2014-07-05T03:47:29.687Z',
                'name': 'Juan Mata',
                'status': 'done'
            },
            {
                'date': '2014-07-04T03:47:29.687Z',
                'name': 'Shinjin Kagawa',
                'status': 'done'
            },
            {
                'date': '2014-07-03T03:47:29.687Z',
                'name': 'Wayne Rooney',
                'status': 'done'
            },
            {
                'date': '2014-07-02T03:47:29.687Z',
                'name': 'Juan Mata',
                'status': 'done'
            },
            {
                'date': '2014-07-01T03:47:29.687Z',
                'name': 'Shinjin Kagawa',
                'status': 'done'
            },
            {
                'date': '2014-06-30T03:47:29.687Z',
                'name': 'Wayne Rooney',
                'status': 'done'
            }
        ]
    }

}]);
