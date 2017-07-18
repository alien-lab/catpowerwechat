/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuevaluateController",["$scope",function($scope){
        $scope.status=false;
        $scope.badEvalute=function () {
            $scope.status=true;
        }
        $scope.cancelBadEvaluate=function () {
            $scope.status=false;
        }
    }]);


})();