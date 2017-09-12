/**
 * Created by ASUS on 2017/7/8.
 */
(function () {
    'user strict';
    var app=angular.module("alienlab");
    app.controller("coachindexController",["$scope","coachService","$filter","coachstuService","$localStorage","$rootScope",
        function ($scope,coachService,$filter,coachstuService,$localStorage,$rootScope) {
        $scope.startTime = null;
        $scope.dt = null;
        $scope.coachadviceDemo = null;

        var coachid = $localStorage.coachinfo.id


        var openid=$localStorage.openid;
        if(openid){
            coachService.loadCoachIndex(openid,function (data) {
                $scope.coachIndex=data;

                $rootScope.coachInfo = data;



            });
        }
        coachstuService.loadCoachStu(coachid,function (data,flag) {
            if (!flag){
                //错误
            }
            $scope.coachstu=data;
            $scope.coachstulength = data.length;
        });

        //日期显示
        $scope.today = function() {
            $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            console.log("====================",$scope.dt);
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
            //排课情况
            var time = $filter('date')($scope.dt, 'yyyy-MM-dd')
            coachService.loadCoachScheInfo (coachid,time,function (result,flag) {
                if (!flag){
                    //错误
                    return;
                }
                $scope.scheCourse = result;
                $scope.scheCourselength = $scope.scheCourse.length;

            })

            //预约人员和预约人数
            coachService.loadAppointmentLearner(coachid,time,function (result,flag) {
                if (!flag){
                    //错误
                    return;
                }
                $scope.appointmentLearners = result;
                $scope.appointmentLearnerLength = $scope.appointmentLearners.length;
            })

            //预约人数
            coachService.loadAppointmentNumber(coachid,time,function (result,flag) {
                if (!flag){
                    //错误
                    return;
                }
                $scope.appointmentLearnerNumber = result;
                $scope.appointmentLearnerNumberLength = $scope.appointmentLearnerNumber.length;

            })

            //教练建议
            coachService.loadCoachAdviceDemo(coachid,time,function (result,flag) {
                if (!flag){
                    //错误
                    alert("error1");
                    return;
                }
                $scope.coachadviceDemo = result;
               // console.log("===============",$scope.coachadviceDemo )
                if($scope.coachadviceDemo){
                    var length = 0;
                    angular.forEach($scope.coachadviceDemo,function (item) {
                        if (item != null) {
                            if (item.coachAdvice == null || item.coachAdvice == "") {

                                length++;
                            } else {
                                console.log("错误！");
                            }
                        }
                        $scope.coachadviceLength = length;
                    })
                }else{
                    $scope.coachadviceLength = 0;
                    console.log("没有数据！");
                }


            })

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
    
    app.service("coachService",["domain","$http",function (domain,$http) {
        this.loadCoachScheInfo = function (coachId,startTime,callback) {
            $http({
                method:'GET',
                url:domain+'api/course-schedulings/courseSchedulingBytimeAndId?coachId='+coachId+'&startTime='+startTime
            }).then(function (data) {
                if (callback){
                    callback(data.data,true);
                }
            },function(data){
                if (callback){
                    callback(data.data,false);
                }
            })
        }

        this.loadAppointmentLearner = function (coachId,startTime,callback) {
            $http({
                method:'GET',
                url:domain+'api/buy-courses/learnerbyidandtime?coachId='+coachId+'&appointmentTime='+startTime
            }).then(function (data) {
                if (callback){
                    callback(data.data,true);
                }
            },function(data){
                if (callback){
                    callback(data.data,false);
                }
            })
        }

        //获取预约人数
        this.loadAppointmentNumber = function (coachId,appointmentTime,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-appointment/learnerbyidandtime?coachId='+coachId+'&appointmentDate='+appointmentTime
            }).then(function (data) {
                if (callback){
                    callback(data.data,true);
                }
            },function(data){
                if (callback){
                    callback(data.data,false);
                }
            })
        }


        this.loadCoachAdviceDemo  = function (coachId,startTime,callback) {
            $http({
                method:'GET',
                url:domain+'api/learner-infos/advicebyidandtime?coachId='+coachId+'&startTime='+startTime
            }).then(function (data) {
                if (callback){
                    callback(data.data,true);
                }
            },function(data){
                if (callback){
                    callback(data.data,false);
                }
            })
        }


        this.loadCoachIndex = function (openid, callback) {
            $http({
                method: 'GET',
                url: domain + '/api/coaches/info?openid=' + openid
            }).then(function (data) {
                if (callback) {
                    callback(data.data);
                }
            })
        }

    }]);
})();
