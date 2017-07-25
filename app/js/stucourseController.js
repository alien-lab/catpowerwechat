/**
 * Created by ASUS on 2017/7/5.
 */
(function () {
    'use strict';
    var app = angular.module("alienlab");
    app.controller("stucourseController", ["$scope", "stuCourseService", "$rootScope","stuindexService", function ($scope, stuCourseService,$rootScope,stuindexService) {
        function loadLearner() {
            if($rootScope.learnerInfo){
                var learnerId = $rootScope.learnerInfo.learner.id;
                if (learnerId){
                    stuCourseService.loadStuCourse(learnerId, function (data) {
                        $scope.stuCourse = data;
                    })
                }

            }
        }

        $scope.$watch("$root.openid",function(newvalue){
            if(!newvalue) return;
            if(!$rootScope.learnerInfo){
                stuindexService.loadStuIndex($rootScope.openid,function (data) {
                    $scope.learnerIndex=data;
                    $rootScope.learnerInfo = data;
                    loadLearner();
                });
            }

        },true)

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

