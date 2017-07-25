/**
 * Created by ASUS on 2017/7/4.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("appointrecordController",
        ["$scope","appointrecordService","$rootScope","stuindexService",
            function($scope,appointrecordService,$rootScope,stuindexService){
            function loadLearner(){
                if($rootScope.learnerInfo){
                    var learnerId = $rootScope.learnerInfo.learner.id;
                    if(learnerId){
                        $scope.appointRecord = appointrecordService.loadAppointRecord(learnerId,function (data) {
                            $scope.appointRecord=data;
                        });
                    }
                }
            }
            loadLearner();



        //取消预约
        $scope.cancelAppoint = function (param) {
            if (param != null){
                appointrecordService.deleteAppoint(param,function (data,flag) {
                    if(!flag){
                        //出现异常给提示
                       // alert("错误");
                    }
                })
            }
        }

        $scope.$watch("$root.openid",function(newvalue){
            if(!newvalue) return;
            if(!$rootScope.learnerInfo){
                stuindexService.loadStuIndex($rootScope.openid,function (data) {
                    $scope.learnerIndex=data;
                    $rootScope.learnerInfo = data;
                    loadLearner();
                });
            }

        },true)

    }]);

    app.service("appointrecordService",["$http","domain",function ($http,domain) {
        this.loadAppointRecord=function (learnerId,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-appointment/allRecord/'+learnerId
            }).then(function (data) {
                if(callback){
                    callback(data.data);
                }
            })



            this.deleteAppoint =function (param,callback) {
                $http({
                    method:'DELETE',
                    url:domain+'api/learner-appointment/'+param,
                }).then(function (data) {
                    if (callback){
                        callback(data.data,true);
                        swal({
                            title:"成功取消预约",
                            type:"success",
                            timer:2000,
                            showConfirmButton:false
                        });
                        setTimeout('window.location.reload()', 1000);
                        //window.setTimeout("location.href='/#!/appointrecord'",1200);
                    }
                },function(data){
                    if (callback){
                        callback(data.data,false);
                    }
                })
            }
        }
    }])

})();
