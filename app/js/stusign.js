/**
 * Created by 橘 on 2017/6/26.
 */
(function () {
    'use strict';
    var app = angular.module("alienlab");
    app.controller("stusignController", ["$scope", "stusignService", "stuindexService",
        function ($scope, stusignService,stuindexService) {
        function loadLearner() {
            if($rootScope.learnerInfo){
                var learnerId = $rootScope.learnerInfo.learner.id;
                if(learnerId!=null) {
                    //加载我的课程
                    stusignService.loadMyCourse(2,function (data) {
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

            /*var signLog = [
                {
                    signId:'1',
                    courseId:'1',
                    courseName: '基础型课程训练',
                    coachName: '李教练',
                    signCount: '3',
                    recentSignTime: '2017-7-4 17:50',
                    coursePicture: 'http://preview.quanjing.com/bjisub003/bji02420070.jpg'
                }, {
                    signId:'2',
                    courseId:'2',
                    courseName: '有氧健身操',
                    coachName: '王教练',
                    signCount: '3',
                    recentSignTime: '2017-7-4 17:50',
                    coursePicture: 'http://mpic.tiankong.com/ade/07d/ade07d1acb41a12e6c8454195248d547/640.jpg@360h'
                }, {
                    signId:'3',
                    courseId:'3',
                    courseName: '健美操',
                    coachName: '陈教练',
                    signCount: '3',
                    recentSignTime: '2017-7-4 17:50',
                    coursePicture: 'http://file03.16sucai.com/2016/10/1100/16sucai_p20161004002_00b.JPG'
                }, {
                    signId:'4',
                    courseId:'4',
                    courseName: '瑜伽',
                    coachName: '刘教练',
                    signCount: '3',
                    recentSignTime: '2017-7-4 18:10',
                    coursePicture: 'http://img01.taopic.com/140921/318765-1409210H63729.jpg'
                }];
            return signLog;*/
        }
    }]);

})();