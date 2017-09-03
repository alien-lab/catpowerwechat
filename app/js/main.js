/**
 * Created by 橘 on 2017/5/7.
 */
(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('alienlab', [
        "ui.router", 'toaster', "ngAnimate", "ngCookies", "ngStorage", "ngResource","ui.bootstrap", "ui.bootstrap.datetimepicker"
    ]).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$urlMatcherFactoryProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $urlMatcherFactoryProvider) {//路由定义
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('stuindex', {
                    url: '/stuindex',
                    templateUrl: 'views/stuindex.html',
                    controller: "stuindexController"
                })
                .state('stuevaluate', {
                    url: '/stuevaluate/:scheId',
                    templateUrl: 'views/stuevaluate.html',
                    controller: "stuevaluateController"
                })
                .state('stuappointment', {
                    url: '/stuappointment',
                    templateUrl: 'views/stuappointment.html',
                    controller: "stuappointmentController"
                })
                .state('appointrecord', {
                    url: '/appointrecord',
                    templateUrl: 'views/appointrecord.html',
                    controller: "appointrecordController"
                })
                .state('stucourse', {
                    url: '/stucourse',
                    templateUrl: 'views/stucourse.html',
                    controller: "stucourseController"
                })
                .state('stusign', {
                    url: '/stusign',
                    templateUrl: 'views/stusign.html',
                    controller: "stusignController"
                })
                .state('historylog', {
                    url: '/stusign/historylog/:courseId',
                    templateUrl: 'views/historylog.html',
                    controller:'historylogController'
                })
                .state('coachadvice', {
                    url: '/stusign/historylog/coachadvice/:courseScheId',
                    templateUrl: 'views/coachadvice.html',
                    controller:'coachadviceController'
                })
                .state('signsuccess', {
                    url: '/signsuccess',
                    templateUrl: 'views/signsuccess.html',
                    controller:'signsuccessController'
                })
                .state('stucoach', {
                    url: '/stucoach',
                    templateUrl: 'views/stucoach.html',
                    controller:'stucoachController'
                })
                .state('fitinformation', {
                    url: '/fitinformation',
                    templateUrl: 'views/fitinformation.html',
                    controller:'fitinformationController'
                })
                .state('coachindex', {
                    url: '/coachindex',
                    templateUrl: 'views/coachindex.html',
                    controller:'coachindexController'
                })
                .state('coachstu', {
                    url: '/coachstu',
                    templateUrl: 'views/coachstu.html',
                    controller:'coachstuController'
                })
                .state('keepfit', {
                    url: '/keepfit/:courseScheId',
                    templateUrl: 'views/keepfit.html',
                    controller:'keepfitController'
                })
                .state('coachwriteinfo', {
                    url: '/coachwriteinfo',
                    templateUrl: 'views/coachwriteinfo.html',
                    controller:'coachwriteinfoController'
                })
                .state('coachappoint', {
                    url: '/coachappoint',
                    templateUrl: 'views/coachappoint.html',
                    controller:'coachappointController'
                })
                .state('coachappointlist', {
                    url: '/coachappointlist',
                    templateUrl: 'views/coachappointlist.html',
                    controller:'coachAppointListController'
                });

        }])
    ;
})();
(function () {
    'use strict';
    angular.module('alienlab').run(['$rootScope', '$log', "wechatService", "$location", "runmodal", "AuthServerProvider","$localStorage",
        function ($rootScope, $log, wechatService, $location, runmodal, AuthServerProvider,$localStorage) {
            var search=$location.search();
            var state=$location.state();
            var hash=$location.hash();
            if(hash.indexOf("?")>=0){
                hash=hash.substring(hash.indexOf("?")+1);
            }
            var params=hash.split("&");
            for(var i=0;i<params.length;i++){
                var p=params[i].split("=");
                search[p[0]]=p[1];
            }
            console.log(search,state,hash);
            if(search&&search.token){
                if(search.token){
                    $localStorage.token=search.token;
                    $localStorage.authenticationToken=search.token;
                }
                if(search.appid){
                    $localStorage.appid=search.appid;
                }
                if(search.timestamp){
                    $localStorage.timestamp=search.timestamp;
                }
                if(search.nonce){
                    $localStorage.nonce=search.nonce;
                }
                if(search.signature){
                    $localStorage.signature=search.signature;
                }
                if(search.openid){
                    $localStorage.openid=search.openid;
                }
            }else{
                if(!$localStorage.token){
                    var url=wechatService.getAuthUrl("stuindex");
                    window.location.href=url;
                }
            }

            wechatService.config();
            wechatService.loadWechatUser($localStorage.openid);

        }]);

})();
(function () {
    'use strict';
    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE
    angular
        .module('alienlab')
        .constant('smsurl', "http://test.moistmedia.net/catpowerserver/api/sendsms")
        // .constant('tokenUrl', "http://localhost:8082/api/authenticate/client")
        // .constant('domain',"http://localhost:8082/")
        // .constant('rootpath',"http://localhost:8082/activitywechat/")
        .constant('tokenUrl', "http://test.moistmedia.net/catpowerserver/api/authenticate")
        .constant('domain', "http://test.moistmedia.net/catpowerserver/")
        .constant('rootpath', "http://test.moistmedia.net/catpowerwechat/")
        // .constant('tokenUrl', "http://test.moistmedia.net/ziranliserver/api/authenticate")
        // .constant('domain',"http://test.moistmedia.net/ziranliserver/")
        // .constant('rootpath',"http://test.moistmedia.net/ziranliwechat/")
        .constant('homePage', "stuindex")
        .constant('wechatappid', "wxd5ceca5e98cb548d")
        .constant('runmodal', "prod")
    ;
})();



