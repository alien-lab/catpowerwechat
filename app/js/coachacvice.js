/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("coachadviceController",["$scope","$stateParams","coachadviceService",function($scope,$stateParams,coachadviceService){
        $scope.advice = null;
        var courseSchedulingId = $stateParams.courseScheId;
        coachadviceService.loadCoachAdvice(2,courseSchedulingId,function (data) {
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