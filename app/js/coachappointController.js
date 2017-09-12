/**
 * Created by ASUS on 2017/7/24.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("coachappointController",["$scope","coachappointService","$state","$stateParams",function ($scope,coachappointService,$state,$stateParams) {
        var appointmentId = $stateParams.appointmentId;
        coachappointService.loadCoachAppoint(appointmentId,function (data) {
            $scope.appointment=data;
            console.log($scope.appointment);
            $scope.acceptAppoint=function () {
                coachappointService.updateAppointment(appointmentId,"预约成功",function (data) {
                    swal({
                        title:"您已接受此预约",
                        type:"success",
                        showConfirmButton:true,
                    },function() {
                        $state.go('coachindex', null, { reload: true });
                    });
                })
            };
            $scope.rejectAppoint=function () {
                coachappointService.updateAppointment(appointmentId,"已约满",function (data) {
                    swal({
                        title:"学员已收到您的回复",
                        type:"success",
                        showConfirmButton:true,
                    },function() {
                        $state.go('coachindex', null, { reload: true });
                    });
                })
            }
        })
    }]);

    app.service("coachappointService",["$http","domain",function ($http,domain) {
        this.loadCoachAppoint=function (learnerappointmentId,callback) {
            $http({
                method:"GET",
                url:domain+'api/learner-appointment/'+learnerappointmentId
            }).then(function (data) {
                if (callback){
                    callback(data.data);
                }
            })
        };
        this.updateAppointment=function (appointmentId,appointmentResult,callback) {
            $http({
                method:"PUT",
                url:domain+'api/learner-appointment',
                data:{
                    appointmentId:appointmentId,
                    appointmentResult:appointmentResult
                }
            }).then(function (data) {
                if (callback){
                    callback(data.data);
                }
            })
        }
    }])

})();
