/**
 * Created by ASUS on 2017/7/4.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("appointrecordController",["$scope","appointrecordService",function($scope,appointrecordService){
        $scope.appointRecord = appointrecordService.loadAppointRecord(2,function (data) {
            $scope.appointRecord=data;
            console.log($scope.appointRecord)
        });
        console.log($scope.appointRecord)
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
        }
            /*var appointRecord =
                {
                    "all":[
                        {
                            "courseName":"有氧健身操",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"杨教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"正在预约"
                        },
                        {
                            "courseName":"瑜伽",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"欧阳教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"接受"
                        },
                        {
                            "courseName":"精选篮球",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"马教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"接受"
                        }
                    ],
                    "start":[
                        {
                            "courseName":"有氧健身操",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"杨教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"正在预约"
                        },
                        {
                            "courseName":"瑜伽",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"欧阳教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"正在预约"
                        },
                        {
                            "courseName":"精选篮球",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"马教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"正在预约"
                        }
                    ],
                    "finish":[
                        {
                            "courseName":"有氧健身操",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"杨教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"接受"
                        },
                        {
                            "courseName":"瑜伽",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"欧阳教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"接受"
                        },
                        {
                            "courseName":"精选篮球",
                            "courseLogo":"../img/coach1.jpg",
                            "coachName":"马教练",
                            "appointTime":"2017-6-16 13:40",
                            "appointStatus":"接受"
                        }
                    ]
                }
            return appointRecord;
        }*/
    }])

})();
