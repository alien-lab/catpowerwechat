/**
 * Created by ASUS on 2017/7/9.
 */
(function () {
    'user strict';
    var app=angular.module("alienlab");
    app.controller("coachstuController",["$scope","coachstuService","$localStorage",function ($scope,coachstuService,$localStorage) {
        var coachid = null;
        if ($localStorage.coachinfo){
            coachid = $localStorage.coachinfo.id;
        }

        coachstuService.loadCoachStu(coachid,function (data) {
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
