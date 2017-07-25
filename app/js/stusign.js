/**
 * Created by 橘 on 2017/6/26.
 */
(function () {
    'use strict';
    var app = angular.module("alienlab");
    app.controller("stusignController", ["$scope", "stusignService", "stuindexService","$rootScope",
        function ($scope, stusignService,stuindexService,$rootScope) {
        function loadLearner() {
            if($rootScope.learnerInfo){
                var learnerId = $rootScope.learnerInfo.learner.id;
                if(learnerId!=null) {
                    //加载我的课程
                    stusignService.loadMyCourse(learnerId,function (data) {
                        $scope.signLog = data;
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
        },true)
    }]);


    app.service("stusignService", ["$http","domain",function ($http,domain) {
        this.loadMyCourse = function (learnerId,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-charges/stusign/'+learnerId
            }).then(function(data){
                if (callback) {
                    callback(data.data);
                }
            });
        }
    }]);
})();