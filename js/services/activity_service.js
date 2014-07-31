/**
 * Created by MohanRaj on 7/30/2014.
 */

"use strict";

app.factory('activityService', ['$http', '$cookieStore', function ($http, $cookieStore) {

    var baseUrl = 'http://localhost:8080/Turns-API';

    return {
        addActivity: function(activity, $scope){

            var encodedcreds = $cookieStore.get('creds');

            $http.defaults.headers.common['Authorization'] = 'Basic ' + encodedcreds;

            return $http({
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                url: baseUrl + '/rest/addGroup',
                method: "POST",
                data: activity
            })
                .success(function(responseData) {
                    console.log("Activity added : " + responseData.status);
                    $scope.loading = false;
                })
                .error(function(data) {
                    console.log("Add activity failed : " + data);
                    $scope.inputerror = true;
                    $scope.loading = false;
                });
        },

        getActivityLog: function(activityId){

            var encodedcreds = $cookieStore.get('creds');
            var currentdate = new Date();
            var enddate = new Date();
            enddate.setDate(currentdate.getDate()+10);

            var currenttime = currentdate.getTime();
            var endtime = enddate.getTime();

            console.log("calling... "+ activityId+'/'+currenttime+'/'+endtime)
            $http.defaults.headers.common['Authorization'] = 'Basic ' + encodedcreds;

            return $http({
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                url: baseUrl + '/rest/log/'+activityId+'/'+currenttime+'/'+endtime,
                method: "GET"
            })
                .success(function(responseData) {
                    console.log("Activity Log : " + responseData);
                })
                .error(function(data) {
                    console.log("Get activity failed : " + data);
                });
        }
    }
}]);