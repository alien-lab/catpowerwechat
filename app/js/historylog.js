/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("historylogController",["$scope","historylogservice","$stateParams","$rootScope",function($scope,historylogservice,$stateParams,$rootScope){

        var courseId = $stateParams.courseId;
        var learnerId = $rootScope.learnerInfo.learner.id;
        historylogservice.loadMyHistoryLog(learnerId,courseId,function (data) {
            $scope.historyLog = data;
        })

    }]);

    app.service("historylogservice",["$http","domain",function ($http,domain) {
        this.loadMyHistoryLog = function (learnerId,courseId,callback) {
            $http({
                method:'POST',
                url:domain+'api/learner-charges/stusign/log',
                data:{
                    learnerId:learnerId,
                    courseId:courseId
                }
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })
        }
    }]);
})();
