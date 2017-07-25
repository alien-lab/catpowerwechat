/**
 * Created by ASUS on 2017/7/5.
 */
(function () {
    'use strict';
    var app = angular.module("alienlab");
    app.controller("stucourseController", ["$scope", "stuCourseService", "$rootScope", function ($scope, stuCourseService,$rootScope) {
        var learnerId = $rootScope.learnerInfo.learner.id;
        stuCourseService.loadStuCourse(learnerId, function (data) {
            $scope.stuCourse = data;
        })
    }]);

    app.service("stuCourseService", ["$http", "domain", function ($http, domain) {
        this.loadStuCourse = function (learnerId, callback) {
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

