/**
 * Created by ASUS on 2017/7/5.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stucourseController",["$scope","stuCourseService",function($scope,stuCourseService){
        $scope.stuCourse = stuCourseService.loadStuCourse();
        console.log($scope.stuCourse)
    }]);

    app.service("stuCourseService",[function () {
        this.loadStuCourse=function () {
            var stuCourse =
            {
                "allCourse":[
                    {
                        "courseName":"有氧健身操",
                        "courseIntroduction":"有氧健身操是一项有益身心的运动",
                        "courseLogo":"../img/coach1.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"3"
                    },
                    {
                        "courseName":"瑜伽",
                        "courseIntroduction":"瑜伽是一项有益身心的运动",
                        "courseLogo":"../img/coach2.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"3"
                    },
                    {
                        "courseName":"健美操",
                        "courseIntroduction":"健美操是一项有益身心的运动",
                        "courseLogo":"../img/course1.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"3"
                    }
                ],
                "startCourse":[
                    {
                        "courseName":"瑜伽基础",
                        "courseIntroduction":"瑜伽基础是一项有益身心的运动",
                        "courseLogo":"../img/coach2.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"3"
                    },
                    {
                        "courseName":"有氧健身操基础",
                        "courseIntroduction":"有氧健身操是一项有益身心的运动",
                        "courseLogo":"../img/coach1.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"3"
                    },
                    {
                        "courseName":"拳击",
                        "courseIntroduction":"拳击是一项有益身心的运动",
                        "courseLogo":"../img/course1.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"3"
                    }
                ],
                "finishCourse":[
                    {
                        "courseName":"自由搏击",
                        "courseIntroduction":"自由搏击是一项强身健体的运动",
                        "courseLogo":"../img/coach1.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"0"
                    },
                    {
                        "courseName":"瑜伽",
                        "courseIntroduction":"瑜伽是一项有益身心的运动",
                        "courseLogo":"../img/course2.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"0"
                    },
                    {
                        "courseName":"有氧健身操",
                        "courseIntroduction":"有氧健身操是一项有益身心的运动",
                        "courseLogo":"../img/coach2.jpg",
                        "coursePrice":"1900",
                        "courseClassHour":"18",
                        "coachName":"杨教练",
                        "courseTime":"2017-6-16 13:40",
                        "signCount":"0"
                    }
                ]
            }
            return stuCourse;
        }
    }])

})();

