/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict'
    var app=angular.module("alienlab");
    app.controller("fitinformationController",["$scope","fitnessService",function ($scope,fitnessService) {
       fitnessService.loadMyFitLog(2,function (data) {
           $scope.fitLogs= data;
       });
        //console.log($scope.fitLogs);

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