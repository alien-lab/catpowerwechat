/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("historylogController",["$scope","historylogservice","$stateParams",function($scope,historylogservice,$stateParams){
        console.log($stateParams.courseId);
        var courseId = $stateParams.courseId;
        historylogservice.loadMyHistoryLog(2,courseId,function (data) {
            $scope.historyLog = data;
        })
        //$scope.historyLog = historylogservice.loadMyHistoryLog();
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
            /*var signHistoryLog = [
                {
                    courseScheId:'1',
                    signTime: '2017-7-4 17:50'
                }, {
                    courseScheId:'2',
                    signTime: '2017-7-4 17:50',
                }, {
                    courseScheId:'3',
                    signTime: '2017-7-4 17:50',
                }, {
                    courseScheId:'4',
                    signTime: '2017-7-4 18:10',
                }];
            return signHistoryLog;*/
        }
    }]);
})();
