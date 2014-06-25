'use strict';

//Setting up route
angular.module('starterlog').config(['$routeProvider',
    function($routeProvider) {
	    $routeProvider.
        
        // core routes
        when('/features', {
            templateUrl: 'templates/main/features.html',
            controller: 'featuresController'
        }).
        when('/pricing', {
            templateUrl: 'templates/main/pricing.html',
            controller: 'pricingController'
        }).
        // when('/login', {
        //     templateUrl: 'views/main/login.html',
        //     controller: 'loginController'
        // }).
        // when('/signup', {
        //     templateUrl: 'views/main/signup.html',
        //     controller: 'signupController'
        // }).
        // when('/auth', {
        //     templateUrl: 'views/main/auth.html',
        //     controller: 'authController'
        // }).
        when('/', {
            templateUrl: 'templates/main/main.html',
            controller: 'mainController'
        }).
        // user routes
        // when('/profile/:email', {
        //     templateUrl: 'views/user/profile.html',
        //     controller: 'ViewUserController'
        // }).
        // default route
        otherwise({
            redirectTo: '/'
        });
    }
]);
