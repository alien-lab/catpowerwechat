/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("coachadviceController",["$scope","$stateParams","coachadviceService","$rootScope",function($scope,$stateParams,coachadviceService,$rootScope){
        $scope.advice = null;
        var courseSchedulingId = $stateParams.courseScheId;
        var learnerId = $rootScope.learnerInfo.learner.id;
        coachadviceService.loadCoachAdvice(learnerId,courseSchedulingId,function (data) {
            $scope.coachadvice = data;
            var advicestr = data.coachAdvice;
            $scope.advice=JSON.parse(advicestr);
        });

    }]);
    app.service("coachadviceService",["$http","domain",function ($http,domain) {
        this.loadCoachAdvice = function (learnerId,courseSchedulingId,callback) {
            $http({
                method:'POST',
                url:domain+'api/learner-infos/coachadvice',
                data:{
                    learnerId:learnerId,
                    courseSchedulingId:courseSchedulingId
                }
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })
        }
    }])

})()