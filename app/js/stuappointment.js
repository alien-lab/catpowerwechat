/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuappointmentController",["$scope","appointmentTimeServer","myCoursesServer","$filter","$rootScope","$state",
        function($scope,appointmentTimeServer,myCoursesServer,$filter,$rootScope,$state){
        $scope.myCourses=[];
        $scope.currentCourse=null;
        $scope.appointmentDate=null;
        $scope.appointmentMemo="";
        $scope.appointmentTimeList=null;
        var learnerId = $rootScope.learnerInfo.learner.id;

        myCoursesServer.loadMyCourses(learnerId,function (data) {

            $scope.myCourses=data.startCourse;
            //默认选中第一课
            if($scope.myCourses.length>0){
                $scope.currentCourse=$scope.myCourses[0];
            }
        });

        $scope.clickCourse=function(course){
            if($scope.currentCourse!=null && course.id!=$scope.currentCourse.id){
                $scope.currentCourse=course;
            }else{
                if($scope.currentCourse==null){
                    $scope.currentCourse=course;
                }
            }
        }

        $scope.$watch("currentCourse",function(newValue,oldValue){
            console.log(newValue,oldValue);
            if($scope.currentCourse==null)return;
             //获取预约时间
             appointmentTimeServer.loadCoursesTime($scope.currentCourse.coach.id,function (data) {
                 $scope.appointmentTimeList = data;
             })
        },true);

         $scope.chooseAppointmentTime = function (date) {
             angular.forEach($scope.appointmentTimeList,function (item,key) {
                 if(item.id == date.id){
                     item.status = true;
                     $scope.appointmentDate= $filter('date')(date.workDate, 'yyyy-MM-dd');
                 }
                 if(item.id != date.id){
                     item.status = false;
                 }
             });
         }

         $scope.post=function(){
             var param={
                  buyCourseId:$scope.currentCourse.id,
                  appointmentDate:$scope.appointmentDate,
                  appointmentMemo:$scope.appointmentMemo

              }
             myCoursesServer.postCourseAppoint(param,function(result,flag){
                 if(!flag){
                     swal(
                         "oh my god!",
                         "您已经预约此课程!",
                         "error");
                 }
                 //正确返回的逻辑
                 swal({
                     title:"预约成功",
                     type:"success",
                     timer:1000,
                     showConfirmButton:false
                 },function() {
                     $state.go('appointrecord', null, { reload: true });
                 });

             });
         }
         

    }]);
    app.service("myCoursesServer",["$http","domain","rootpath",function ($http,domain,rootpath) {
        //根据学院ID查询对应消息
        this.loadMyCourses = function (learnerId,callback) {
            $http({
                method:'GET',
                url:domain+'api/buy-courses/mycourse/'+learnerId
            }).then(function (data) {
                if(callback){
                    callback(data.data);
                }
            })
        }
        //查询对应课程名称
        this.loadCourseName = function (id,callback) {
            $http({
                method:'GET',
                url:domain+'api/courses/'+id
            }).then(function (data) {
                if(callback){
                    callback(data.data);
                }
            })
        }
        //预约教练信息
        this.postCourseAppoint = function (param,callback) {
            $http({
                method:'POST',
                url:domain+'api/learner-appointment',
                data:param
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

    }]);
    app.service("appointmentTimeServer",["$http","domain",function ($http,domain) {
        this.loadCoursesTime = function (coachId,callback) {
            $http({
                method:'GET',
                url:domain+'api/courseworksche/info/'+coachId
            }).then(function (data) {
                if(callback){
                    callback(data.data);
                }
            })
        }
    }]);

})();