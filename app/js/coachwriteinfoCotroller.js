/**
 * Created by ASUS on 2017/7/22.
 */
(function () {
    'user strict';
    var app = angular.module("alienlab");
    app.controller("coachwriteinfoController",["$scope","coachwriteinfoService","$stateParams",
        function ($scope,coachwriteinfoService,$stateParams) {
        $scope.submit=function (foodAdvice,exerciseAdvice) {
            console.log(foodAdvice,exerciseAdvice)
            var coachAdvice={
              "foodAdvice":foodAdvice,
              "exerciseAdvice":exerciseAdvice
            };
            var learnerId = $stateParams.learnerId;
            var scheId = $stateParams.scheId;

            coachwriteinfoService.insertLearnerInfo(coachAdvice,learnerId,scheId,function (data) {
                swal({
                    title:"您填写的学员健身反馈已提交",
                    type:"success",
                    showConfirmButton:false,
                    timer:2000
                });
            })
          
        }
    }]);

    app.service("coachwriteinfoService",["$http","domain",function ($http,domain) {
        this.insertLearnerInfo=function (coachAdvice,learnerId,scheId,callback) {
            $http({
                method:"POST",
                url:domain+'api/learner-infos/fitlog',
                data:{
                    coachAdvice:coachAdvice,
                    learnerId:learnerId,
                    scheId:scheId
                }
            }).then(function (data) {
                if (callback){
                    callback(data.data);
                }
            })
        }

    }])

})();
