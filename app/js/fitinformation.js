/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict'
    var app=angular.module("alienlab");
    app.controller("fitinformationController",["$scope","fitnessService","stuindexService","$rootScope",function ($scope,fitnessService,stuindexService,$rootScope) {
        function loadLearner(){
            if($rootScope.learnerInfo){
                var learnerId = $rootScope.learnerInfo.learner.id;
                if(learnerId){
                    fitnessService.loadMyFitLog(learnerId,function (data) {
                        $scope.fitLogs= data;
                    });
                }
            }
        }
        loadLearner();
        $scope.watch("$root.openid",function (newValue) {
            if (!newValue)return;
            if (!$scope.learnerInfo){
                stuindexService.loadStuIndex($rootScope.openid,function (data) {
                    $scope.learnerIndex=data;
                    $rootScope.learnerInfo = data;
                    loadLearner();
                });
            }
        },true);

    }]);
    app.service("fitnessService",["$http","domain",function ($http,domain) {
        this.loadMyFitLog = function (learnerId,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-infos/fitlog/'+learnerId
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })
        }
           /* var fitlog=[
                {
                    "courseScheId":"1",
                    "bodytest":{
                        "height":"170",
                        "weight":"58",
                        "bodyfat":"0.3",
                        "fattype":"正常",
                        "protein":"100",
                        "checktime":"2017-05-10 15:04"
                    }
                },
                {
                    "courseScheId":"2",
                    "bodytest":{
                        "height":"168",
                        "weight":"55",
                        "bodyfat":"0.3",
                        "fattype":"正常",
                        "protein":"100",
                        "checktime":"2017-07-10 15:04"
                    }
                },
                {
                    "courseScheId":"3",
                    "bodytest":{
                        "height":"169",
                        "weight":"50",
                        "bodyfat":"0.4",
                        "fattype":"正常",
                        "protein":"100",
                        "checktime":"2017-07-10 15:22"
                    }
                }
            ]
            return fitlog;
        }*/
    }])
})();