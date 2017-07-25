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
            /*var coachstu=[
                {
                    "learnerName":"潇潇",
                    "learnerHead":"../img/coach2.jpg",
                    "courseName":"有氧健身操"
                },{
                    "learnerName":"萧蔷花",
                    "learnerHead":"../img/coach1.jpg",
                    "courseName":"精选篮球"
                },{
                    "learnerName":"蜡笔小新",
                    "learnerHead":"../img/course1.jpg",
                    "courseName":"瑜伽"
                },{
                    "learnerName":"哆啦A梦",
                    "learnerHead":"../img/course2.jpg",
                    "courseName":"足球"
                },{
                    "learnerName":"大雄",
                    "learnerHead":"../img/coach2.jpg",
                    "courseName":"棒球"
                }
            ];
            return coachstu;*/
        }
    }]);

})();
