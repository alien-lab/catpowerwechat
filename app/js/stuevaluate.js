/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuevaluateController",["$scope","stuevaluateService","$stateParams","$rootScope","$state",
        function($scope,stuevaluateService,$stateParams,$rootScope,$state){
        var scheId = $stateParams.scheId;

        $scope.$watch("$root.learnerInfo",function(newvalue,oldvalue){
            if(newvalue&&newvalue.learner){
                //加载当前学员对此节课的评价数据。

            }
        });

        stuevaluateService.loadStuEvalute(scheId,function (data) {
           $scope.courseInfo=data;

        });

        $scope.status=false;
        $scope.service=10;
        $scope.speciality=10;
        $scope.coach=10;
        $scope.badEvalute=function () {
            $scope.status=true;
        };
        $scope.cancelBadEvaluate=function () {
            $scope.status=false;
        };
        $scope.sureEvaluate=function (service,speciality,coach) {
            var learnerId = $rootScope.learnerInfo.learner.id;
            stuevaluateService.setEvalute(service,speciality,coach,"无",0,learnerId,scheId,function (data) {
                swal({
                    title:"感谢您的评价",
                    type:"success",
                    showConfirmButton:true,
                },function() {
                    $state.go('stuindex', null, { reload: true });
                });
            });

        };

        $scope.sureBadEvaluate=function (badEvaluate) {
            console.log(badEvaluate)
            var learnerId = $rootScope.learnerInfo.learner.id;
            stuevaluateService.setEvalute(0,0,0,badEvaluate,1,learnerId,scheId,function (data) {
                swal({
                    title:"感谢您的评价",
                    type:"success",
                    showConfirmButton:true,
                },function() {
                    $state.go('stuindex', null, { reload: true });
                });
            });
        };
    }]);
    
    app.service("stuevaluateService",["$http","domain",function ($http,domain) {
        this.loadStuEvalute=function (scheId,callback) {
            $http({
                method:"GET",
                url:domain+'api/course-schedulings/'+scheId
            }).then(function (data) {
                if (callback){
                    callback(data.data);
                }
            });
        }

        this.setEvalute=function (serviceAttitude,speciality,like,complain,evaluation,learnerId,scheId,callback) {
            $http({
                method:"POST",
                url:domain+"api/coach-evaluates-learner",
                data:{
                    "serviceAttitude":serviceAttitude,
                    "speciality":speciality,
                    "like":like,
                    "complain":complain,
                    "evaluation":evaluation,
                    "learnerId":learnerId,
                    "scheId":scheId
                }
            }).then(function (data) {
                if (callback){
                    callback(data.data);
                }
            })
        }
    }]);


})();