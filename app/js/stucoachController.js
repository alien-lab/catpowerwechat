/**
 * Created by ASUS on 2017/7/6.
 */
(function () {
    'use strict';
    var app = angular.module("alienlab");
    app.controller("stucoachController",["$scope","stucoachService",function ($scope,stucoachService) {
        $scope.stucoash=stucoachService.loadStuCoach();
        console.log($scope.stucoash)
    }]);

    app.service("stucoachService",[function () {
        this.loadStuCoach=function () {
            var stucoach =
            [
                {
                    "coachName":"杨教练",
                    "coachHead":"../img/coach1.jpg",
                    "description":"爱运动，爱生活",
                    "phone":"1345678911",
                    "courseName":"有氧健身操"
                },

                {
                    "coachName":"杨教练",
                    "coachHead":"../img/coach1.jpg",
                    "description":"爱运动，爱生活",
                    "phone":"1345678911",
                    "courseName":"有氧健身操"
                },
                {
                    "coachName":"杨教练",
                    "coachHead":"../img/coach1.jpg",
                    "description":"爱运动，爱生活",
                    "phone":"1345678911",
                    "courseName":"有氧健身操"
                }

            ]
            return stucoach;
        }
    }]);
})();
