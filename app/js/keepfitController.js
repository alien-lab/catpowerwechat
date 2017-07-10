/**
 * Created by Master Cll on 2017/7/9.
 */
(function () {
    'use strict'
    var app=angular.module("alienlab");
    app.controller("keepfitController",["$scope","$stateParams","keepfitService",function ($scope,$stateParams,keepfitService) {
        $scope.fitLogs=keepfitService.loadfitlog();
        console.log($scope.fitLogs);
    }]);
    app.service("keepfitService",[function () {
        this.loadfitlog = function () {
            var fitlog = {
                "bodytest":{
                    "height":"170",
                    "weight":"58",
                    "bodyfat":"15.8",
                    "fattype":"正常",
                    "protein":"100",
                    "water":"36.6",
                    "salt":"4.1",
                    "muscle":"47.1",
                    "bodymass":"24.6",
                    "bodyfatper":"22.3"
                }
            }
            return fitlog;
        }
    }])
})()