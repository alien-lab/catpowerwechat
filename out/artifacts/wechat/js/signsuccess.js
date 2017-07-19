/**
 * Created by Master Cll on 2017/7/5.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("signsuccessController",["$scope","signSuccessService",function($scope,signSuccessService){
        $scope.historyLog = signSuccessService.loadMyHistoryLog();
    }]);
    app.service("signSuccessService",[function(){
        this.loadMyHistoryLog = function () {
            var signHistoryLog =
                {
                    courseName:'有氧健身操',
                    coachName:'李教练',
                    remainNumber:'3',
                    signTime: '2017-7-4 17:50'
                }
                ;
            return signHistoryLog;
        }
    }])
})();