//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view
app.controller('main-Controller', [ '$scope', function ($scope) {

    $scope.activities = ['Roomies', 'Dinner', 'Lunch', 'Washing'];
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
    $scope.status;

    init();

    function init(){
        $scope.status = 200;
    }

}]);
