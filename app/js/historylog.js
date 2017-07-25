/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("historylogController",["$scope","historylogservice","$stateParams","$rootScope","stuindexService",
        function($scope,historylogservice,$stateParams,$rootScope,stuindexService){
        var courseId = $stateParams.courseId;
        function loadLearner(){
            if($rootScope.learnerInfo!=null && courseId!=null){
                var learnerId = $rootScope.learnerInfo.learner.id;
                if(learnerId){
                    historylogservice.loadMyHistoryLog(learnerId,courseId,function (data) {
                        $scope.historyLog = data;
                    })
                }
            }
        }
        loadLearner();

        $scope.$watch("$root.openid",function (newValue) {
            if (!newValue)return;
            if (!$scope.learnerInfo){
                stuindexService.loadStuIndex($rootScope.openid,function (data) {
                    $scope.learnerIndex=data;
                    $rootScope.learnerInfo = data;
                    loadLearner();
                });
            }
        },true)

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
