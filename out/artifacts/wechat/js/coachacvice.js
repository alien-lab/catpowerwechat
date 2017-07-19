/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("coachadviceController",["$scope","$stateParams","coachadviceService",function($scope,$stateParams,coachadviceService){
        console.log($stateParams.courseScheId);
        var courseScheId = $stateParams.courseScheId;
        coachadviceService.loadCoachAdvice(2,courseScheId,function (data) {
            $scope.coachadvice = data
        });
        /*$scope.coachadvice =
            coachadviceService.loadCoachAdvice();*/
    }]);
    app.service("coachadviceService",["$http","domain",function ($http,domain) {
        this.loadCoachAdvice = function (learnerId,courseScheId,callback) {
            $http({
                method:'POST',
                url:domain+'api/learner-infos/coachadvice',
                data:{
                    learnerId:learnerId,
                    courseScheId:courseScheId
                }
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })

            /*var coachadvice =
                {
                    "courseId":"1",
                    "eatInformation": "hha一定要多吃肉多吃肉多吃肉，恩要多吃肉，多吃肉，多吃甜食，多喝碳酸饮料，多睡觉，恩，就这样",
                    "fitInformation": "hhah没事多去跑步多去运动，多走路，多看风景，多看路，多种树，多造福人民，恩，就这样。"
                };
            return coachadvice;*/
        }
    }])

})()