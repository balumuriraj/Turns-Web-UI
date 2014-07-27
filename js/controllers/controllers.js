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
                    $scope.userdetails.name = responseData.name;
                    $scope.userdetails.email = responseData.email;
                    $scope.userdetails.friends = responseData.friends;
                    $scope.userdetails.groups = responseData.groups;
                    $location.path('/dashboard');
                    $scope.user = {email: '', password: ''};
                    closesignin();
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

app.controller('add-activity-Controller', [ '$scope', function ($scope) {

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
        $scope.activity.members.push({'name': '', 'email': ''});
    };

    $scope.removeFriend = function(index) {
        $scope.activity.members.splice(index,1);
    };

}]);

app.controller('all-activities-Controller', [ '$scope', function ($scope) {

    $scope.loading = false;

    $scope.activities = [
        {
            "id": "c2e3d194-e5fb-4ca1-93db-6df9103948d9",
            "name": "Roomies",
            "members":
                [
                    {
                        "name": "Jambalhat",
                        "emailId": "satya12344@email.com",
                        "count": 0
                    },
                    {
                        "name": "satya",
                        "emailId": "satya.n93@email.com",
                        "count": 0
                    },
                    {
                        "name": "satya",
                        "emailId": "satyaswaroopb@email.com",
                        "count": 0
                    }
                ]
        },
        {
            "id": "c8bb4520-0e3b-4876-bfd8-37c8288c0d85",
            "name": "Washing",
            "members":
                [
                    {
                        "name": "Jambalhat",
                        "emailId": "satya12344@email.com",
                        "count": 0
                    }
                ]
        },
        {
            "id": "c8bb4520-0e3b-4876-bfd8-37c8288c0d85",
            "name": "Transport",
            "members":
                [
                    {
                        "name": "Jambalhat",
                        "emailId": "satya12344@email.com",
                        "count": 0
                    }
                ]
        },
        {
            "id": "c8bb4520-0e3b-4876-bfd8-37c8288c0d85",
            "name": "Shopping",
            "members":
                [
                    {
                        "name": "Jambalhat",
                        "emailId": "satya12344@email.com",
                        "count": 0
                    }
                ]
        },
        {
            "id": "c8bb4520-0e3b-4876-bfd8-37c8288c0d85",
            "name": "Cleaning",
            "members":
                [
                    {
                        "name": "Jambalhat",
                        "emailId": "satya12344@email.com",
                        "count": 0
                    }
                ]
        }
    ];

}]);

app.controller('friends-Controller', [ '$scope', function ($scope) {

    $scope.friends = [
        {
            "name": "Wayne Rooney",
            "email": "asdazzxc@gmail.com"
        },
        {
            "name": "Shinjin Kagawa",
            "email": "awfgdgtzx@gmail.com"
        },
        {
            "name": "Juan Mata",
            "email": "zxhty@gmail.com"
        },
        {
            "name": "Robin Van PErsi",
            "email": "hjoigbv@gmail.com"
        },
        {
            "name": "Andre Herera",
            "email": "bhhtrdc@gmail.com"
        }
    ];

}]);