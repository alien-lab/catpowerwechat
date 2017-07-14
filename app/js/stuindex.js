/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuindexController",["$scope","stuindexService",function($scope,stuindexService){
        /*console.log("返回的参数："+$rootScope.openid);*/
        stuindexService.loadStuIndex("123456",function (data) {
            $scope.learnerIndex=data;
            console.log($scope.learnerIndex)
        })
    }]);

    app.service("stuindexService",["$http","domain",function ($http,domain) {
        this.loadStuIndex=function (openid,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-index/learnInfo/'+openid
            }).then(function (data) {
                if(callback){
                    callback(data.data);
                }
            })
        }

    }]);

})();