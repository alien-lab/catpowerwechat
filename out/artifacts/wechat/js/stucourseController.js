/**
 * Created by ASUS on 2017/7/5.
 */
(function () {
    'use strict';
    var app = angular.module("alienlab");
    app.controller("stucourseController", ["$scope", "stuCourseService", function ($scope, stuCourseService) {
        stuCourseService.loadStuCourse(2, function (data) {
            $scope.stuCourse = data;
        })
    }]);

    app.service("stuCourseService", ["$http", "domain", function ($http, domain) {
        this.loadStuCourse = function (learnerId, callback) {
            console.log("hhahahhahahhah" + learnerId);
            $http({
                method: 'GET',
                url: domain + 'api/buy-courses/mycourse/' + learnerId
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })
        }

    }])

})();

