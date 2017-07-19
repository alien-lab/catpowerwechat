/**
 * Created by ASUS on 2017/7/8.
 */
(function () {
    'user strict';
    var app=angular.module("alienlab");
    app.controller("coachindexController",["$scope","coachService",function ($scope,coachService) {
        $scope.appointInfo = coachService.loadCoachIndex();
        console.log($scope.appointInfo)
    }]);
    
    app.service("coachService",[function () {
        this.loadCoachIndex=function () {
            var appointInfo={
                'appInfo':[
                    {
                        "time":"2017-7-8",
                        "learnerInfo":[
                            {
                                'learnerName':'马大哈',
                                'head':'../img/coach2.jpg',
                                'courseName':'有氧健身操课'
                            },{
                                'learnerName':'马大哈',
                                'head':'../img/coach2.jpg',
                                'courseName':'有氧健身操课'
                            },{
                                'learnerName':'马大哈',
                                'head':'../img/coach2.jpg',
                                'courseName':'有氧健身操课'
                            }
                        ]
                    }


                ],
                'disappInfo':[
                    {
                        "time":"2017-7-8",
                        "learnerInfo":[
                            {
                                'learnerName':'马大哈',
                                'head':'../img/coach2.jpg',
                                'courseName':'有氧健身操课'
                            },{
                                'learnerName':'马大哈',
                                'head':'../img/coach2.jpg',
                                'courseName':'有氧健身操课'
                            },{
                                'learnerName':'马大哈',
                                'head':'../img/coach2.jpg',
                                'courseName':'有氧健身操课'
                            }
                        ]
                    }


                ]
            };
            return appointInfo;
        }
    }]);
})();
