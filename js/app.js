var app = angular.module('turns',['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    
        .when('/dashboard',
            {
                controller: 'dashboard-Controller',
                templateUrl: 'js/partials/dashboard.html'
            })
        .when('/activities',
            {
                controller: 'activities-Controller',
                templateUrl: 'js/partials/activities.html'
            })
        .when('/friends',
            {
                controller: 'friends-Controller',
                templateUrl: 'js/partials/friends.html'
            })
        .when('/settings',
            {
                controller: 'settings-Controller',
                templateUrl: 'js/partials/settings.html'
            })
        .otherwise({ redirectTo: '/dashboard' });
});