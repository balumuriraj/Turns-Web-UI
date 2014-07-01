//This controller retrieves data from the multimediaService and associates it with the $scope
//The $scope is ultimately bound to the multimedia view
app.controller('dashboard-Controller', [ '$scope', function ($scope) {

    $scope.item;
    $scope.status;

    init();

    function init(){
        $scope.item = "Hello World";
        $scope.status = 200;
    }

}]);
