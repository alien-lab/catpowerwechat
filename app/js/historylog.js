/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("historylogController",["$scope","historylogservice","$stateParams",function($scope,historylogservice,$stateParams){
        console.log($stateParams.courseId);
        $scope.historyLog = historylogservice.loadMyHistoryLog();
    }]);

    app.service("historylogservice",[function () {
        this.loadMyHistoryLog = function () {
            var signHistoryLog = [
                {
                    signTime: '2017-7-4 17:50'
                }, {
                    signTime: '2017-7-4 17:50',
                }, {
                    signTime: '2017-7-4 17:50',
                }, {
                    signTime: '2017-7-4 18:10',
                }];
            return signHistoryLog;
        }
    }]);
})();
