/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("coachadviceController",["$scope","$stateParams",function($scope,$stateParams){
        console.log($stateParams.courseScheId);
    }]);

})()