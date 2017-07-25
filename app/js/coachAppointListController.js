/**
 * Created by ASUS on 2017/7/25.
 */
(function () {
    'user strict';
    var app=angular.module("alienlab");
    app.controller("coachstuController",["$scope","coachstuService",function ($scope,coachstuService) {
        coachstuService.loadCoachStu(4,function (data) {
            $scope.coachstu=data;
            console.log($scope.coachstu)
        });

    }]);
})();
