/**
 * Created by Master Cll on 2017/7/9.
 */
(function () {
    'use strict'
    var app=angular.module("alienlab");
    app.controller("keepfitController",["$scope","$stateParams","keepfitService",function ($scope,$stateParams,keepfitService) {
        $scope.fitLogs=keepfitService.loadfitlog(2,function (data) {
            $scope.fitLogs = data.data;
        });
    }]);
    app.service("keepfitService",["$http","domain",function ($http,domain) {
        this.loadfitlog = function (learnerId,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-infos/fitlog/'+learnerId
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })
        }
    }])
})()