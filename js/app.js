var app = angular.module('turns',['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    
        .when('/dashboard',
            {
                controller: 'dashboard-Controller',
                templateUrl: '/js/partials/dashboard.html'
            })
        .otherwise({ redirectTo: '/dashboard' });
});