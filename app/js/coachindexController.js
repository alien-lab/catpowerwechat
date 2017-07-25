/**
 * Created by ASUS on 2017/7/8.
 */
(function () {
    'user strict';
    var app=angular.module("alienlab");
    app.controller("coachindexController",["$scope","coachService",function ($scope,coachService) {
        $scope.appointInfo = coachService.loadCoachIndex();
        console.log($scope.appointInfo)



        //假日期
        $scope.weeks = [{
            id:1,
            week:'周日'
        },{
            id:1,
            week:'周一'
        },{
            id:1,
            week:'周二'
        },{
            id:1,
            week:'周三'
        },{
            id:1,
            week:'周四'
        },{
            id:1,
            week:'周五'
        },{
            id:1,
            week:'周六'
        }];
        //排课情况
        $scope.scheCourse = [{
            id:1,
            courseName:'瑜伽',
            scheTime:'2017/07/21 08:30'
        },{
            id:1,
            courseName:'普拉提',
            scheTime:'2017/07/21 15:30'
        }];
        $scope.scheCourselength = $scope.scheCourse.length;
        //预约人数
        $scope.appointmentLearners = [{
            id:1,
            headImg:'http://up.qqjia.com/z/face01/face06/facejunyong/junyong04.jpg',
            learnerName:'学员1'
        },{
            id:2,
            headImg:'http://tupian.enterdesk.com/2014/lxy/2014/12/04/3/5.gif',
            learnerName:'学员2'
        },{
            id:3,
            headImg:'http://www.feizl.com/upload2007/2014_03/140319194238175.jpg',
            learnerName:'学员3'
        }];
        $scope.appointmentLearnerLength = $scope.appointmentLearners.length;


        //日期显示
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.options = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function() {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
        };

        $scope.toggleMin();

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
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
