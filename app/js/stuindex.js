/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuindexController",["$scope","$rootScope","stuindexService",function($scope,$rootScope,stuindexService){
        // $scope.loadAll = true;
        $scope.$watch("$root.openid",function(newvalue,oldvalue){
            console.log("openid changed:",newvalue);
            if(newvalue&&newvalue!=""){
                stuindexService.loadStuIndex($rootScope.openid,function (data) {
                    $scope.learnerIndex=data;
                    console.log($scope.learnerIndex);
                });
            }
        },true);

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