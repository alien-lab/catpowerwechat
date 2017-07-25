(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuindexController",["$scope","$rootScope","stuindexService",
            function($scope,$rootScope,stuindexService){
        // $scope.loadAll = true;
        $scope.$watch("$root.openid",function(newvalue,oldvalue){
           // console.log("openid changed:",newvalue);
            if(newvalue&&newvalue!=""){
                stuindexService.loadStuIndex($rootScope.openid,function (data) {
                    $scope.learnerIndex=data;
                    $rootScope.learnerInfo = data;
                });
            }
        },true);

        $scope.sign=function () {
            wx.scanQRCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                }
            });
        }

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


/*(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuindexController",["$scope","stuindexService",function($scope,stuindexService){
        /!*console.log("返回的参数："+$rootScope.openid);*!/
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

})();*/

