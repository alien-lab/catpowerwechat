/**
 * Created by 橘 on 2017/6/26.
 */
(function(){
    'use strict';
    var app=angular.module("alienlab");
    app.controller("stuappointmentController",["$scope","appointmentTimeServer","myCoursesServer",function($scope,appointmentTimeServer,myCoursesServer){

        //加载我的课程
        $scope.myCourses = myCoursesServer.loadMyCourses();
        console.log($scope.myCourses);
        //选择课程
        $scope.getCourse = function (id) {
            angular.forEach($scope.myCourses,function (item) {
                if(item.id == id){
                    $scope.appointmentCourse =item.courseName;
                    $scope.showCourse = true;
                }
            });

        };
        //预约时间
        $scope.appointmentTimeList = appointmentTimeServer.loadCoursesTime();
        $scope.chooseAppointmentTime = function (id) {
            angular.forEach($scope.appointmentTimeList,function (item,key) {
                if(item.id == id){
                    item.status = true;
                }
                if(item.id != id){
                    item.status = false;
                }
            });
        }

    }]);
    app.service("myCoursesServer",[function () {
        this.loadMyCourses = function () {
            var myCourses = [{
                id:1,
                courseName:'基础课',
                coursePicture:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2847892609,1708440173&fm=26&gp=0.jpg'
            },{
                id:2,
                courseName:'高级健美训练技术',
                coursePicture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3474014184,3118816534&fm=26&gp=0.jpg'
            },{
                id:3,
                courseName:'功能性训练课程',
                coursePicture:'http://www.chuangtijianshen.com/data/upload/20170110/5874ac0771f8e.jpg'
            },{
                id:4,
                courseName:'普拉提',
                coursePicture:'http://mpic.tiankong.com/cd2/86b/cd286b8f9867a1afdcf64451706bc01c/640.jpg@360h'
            },{
                id:5,
                courseName:'健美健身',
                coursePicture:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=909595617,895328992&fm=26&gp=0.jpg'
            },{
                id:6,
                courseName:'动感单车',
                coursePicture:'http://preview.quanjing.com/bjisub003/bji02420070.jpg'
            },{
                id:7,
                courseName:'搏击操',
                coursePicture:'http://mpic.tiankong.com/a3b/691/a3b691d6e8764b43a7b7ecc6537cb816/640.jpg@360h'
            },{
                id:8,
                courseName:'形体',
                coursePicture:'http://mpic.tiankong.com/ade/07d/ade07d1acb41a12e6c8454195248d547/640.jpg@360h'
            }];
            return myCourses;
        }
    }]);
    app.service("appointmentTimeServer",[function () {
        this.loadCoursesTime = function () {
            var coursesTime = [{
                id:1,
                appointmentTime:'2017年07月05日 12:02',
                status:false
            },{
                id:2,
                appointmentTime:'2017年07月06日 12:02',
                status:false
            },{
                id:3,
                appointmentTime:'2017年07月07日 12:02',
                status:false
            },{
                id:4,
                appointmentTime:'2017年07月08日 12:02',
                status:false
            },{
                id:5,
                appointmentTime:'2017年07月09日 12:02',
                status:false
            },{
                id:6,
                appointmentTime:'2017年07月010日 12:02',
                status:''
            }];
            return coursesTime;
        }
    }]);

})();