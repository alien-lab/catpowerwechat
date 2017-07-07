/**
 * Created by 橘 on 2017/5/7.
 */
(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('alienlab', [
        "ui.router", 'toaster', "ngAnimate", "ngCookies", "ngStorage", "ngResource"
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
                    url: '/stuevaluate',
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

            ;
        }])
    ;
})();
(function () {
    'use strict';
    angular.module('alienlab').run(['$rootScope', '$log', "wechatService", "$location", "runmodal", "AuthServerProvider",
        function ($rootScope, $log, wechatService, $location, runmodal, AuthServerProvider) {
            $rootScope.isloading = true;
            AuthServerProvider.login({
                username: "admin",
                password: "user",
                rememberMe: true
            }, function () {
                if (runmodal == "dev") {//调试模式模拟身份
                    wechatService.testUser();
                } else {
                    //启动
                    wechatService.wechatConfig();
                    var url = $location.$$absUrl;
                    var pos = url.indexOf("code=");
                    if (pos > 0) {
                        url = url.substring(pos + 5);
                        console.log(url);
                        var nextPos = url.indexOf("&");
                        var code = url.substring(0, nextPos);
                        console.log(code);
                        console.log("system start! find code param.invoke code user method");
                        wechatService.loadWechatUser(code);
                    } else {
                        //alert("没有从微信跳转");
                        var shareid = $location.search().shareid;
                        console.log()
                        var link = wechatService.getAuthUrl($location.$$absUrl, shareid);
                        window.location.href = link;
                    }
                }
            });

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
        .constant('rootpath', "http://localhost:8080/catpowerwechat/")
        // .constant('tokenUrl', "http://test.moistmedia.net/ziranliserver/api/authenticate")
        // .constant('domain',"http://test.moistmedia.net/ziranliserver/")
        // .constant('rootpath',"http://test.moistmedia.net/ziranliwechat/")
        .constant('homePage', "stuindex")
        .constant('wechatappid', "")
        .constant('runmodal', "dev")
    ;
})();
