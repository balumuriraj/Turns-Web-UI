//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view
app.controller('dashboard-Controller', [ '$scope', function ($scope) {

    $scope.activities = ['Roomies', 'Dinner', 'Lunch', 'Washing'];
    $scope.friends = ['Robin Van Persie', 'Shinjin Kagawa', 'Juan Mata', 'Ander Herera'];
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
