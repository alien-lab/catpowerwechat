/**
 * Created by ASUS on 2017/7/9.
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

    app.service("coachstuService",["$http","domain",function ($http,domain) {
        this.loadCoachStu=function (coachId,callback) {
            $http({
                method:"GET",
                url:domain+'api/buy-courses/learner/'+coachId
            }).then(function (data) {
                if (callback){
                    callback(data.data);
                }
            })
        }
    }]);

})();
