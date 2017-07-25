/**
 * Created by Master Cll on 2017/7/6.
 */
(function () {
    'use strict';
    var app=angular.module("alienlab");
    app.controller("coachadviceController",["$scope","$stateParams","coachadviceService",function($scope,$stateParams,coachadviceService){
        console.log($stateParams.courseScheId);
        $scope.advice=null;
        $scope.foodAdvice=null;
        $scope.exerciseAdvice=null;
        $scope.current = null;
        var courseSchedulingId = $stateParams.courseScheId;
        coachadviceService.loadCoachAdvice(2,courseSchedulingId,function (data) {
            $scope.coachadvice = data;
            $scope.advice = data.coachAdvice;
            $scope.current= ($scope.advice).replace("=",":");
            var toStr = JSON.stringify($scope.current);
            console.log("=========================="+toStr)
            console.log($scope.current.foodAdvice)

           // console.log("zifushuzu"+arr);
             /*angular.forEach($scope.current,function (item) {
                //console.log("hahsdhakkdas"+item);
                 $scope.foodAdvice= item[1];
                 console.log("饮食建议"+$scope.foodAdvice)
             })*/
            $scope.current = ($scope.current);
            for(var i = 0 ;i<$scope.current.length;i++){
              //  console.log("哈哈哈"+($scope.current)[0][0])
                console.log("哈哈哈"+$scope.current)
            }


        });

    }]);
    app.service("coachadviceService",["$http","domain",function ($http,domain) {
        this.loadCoachAdvice = function (learnerId,courseSchedulingId,callback) {
            $http({
                method:'POST',
                url:domain+'api/learner-infos/coachadvice',
                data:{
                    learnerId:learnerId,
                    courseSchedulingId:courseSchedulingId
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