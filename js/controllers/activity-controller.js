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

app.controller('all-activities-Controller', [ '$scope', '$location', function ($scope, $location) {

    $scope.addactivity = function() {
        $location.path('/activities/addActivity');
    };

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