/**
 * Created by ASUS on 2017/7/25.
 */
(function () {
    'user strict';
    var app=angular.module("alienlab");
    app.controller("coachAppointListController",["$scope","coachAppointListService","$state","$localStorage",
        function ($scope,coachAppointListService,$state,$localStorage) {
        var coachid = null;
        if ($localStorage.coachinfo){
            coachid = $localStorage.coachinfo.id;
        }
        coachAppointListService.loadAppointment(coachid,function (data) {
            $scope.appointment=data;
            console.log($scope.appointment)
            $scope.acceptAppoint=function (learnerAppointId) {
                coachAppointListService.updateAppointment(learnerAppointId,"预约成功",function (data) {
                    swal({
                        title:"您已接受此预约",
                        type:"success",
                        showConfirmButton:true,
                    },function() {
                        $state.go('coachappointlist', null, { reload: true });
                    });
                })
            };
            $scope.rejectAppoint=function (learnerAppointId) {
                coachAppointListService.updateAppointment(learnerAppointId,"已约满",function (data) {
                    swal({
                        title:"学员已收到您的回复",
                        type:"success",
                        showConfirmButton:true,
                    },function() {
                        $state.go('coachappointlist', null, { reload: true });
                    });
                })
            }
        })
    }]);

    app.service("coachAppointListService",["$http","domain",function ($http,domain) {
        this.loadAppointment=function (coachId,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-appointment/coach/'+coachId
            }).then(function (data) {
                callback(data.data);
            })
        }

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
