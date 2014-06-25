'use strict';

//Setting up route
angular.module('starterlog').config(['$routeProvider',
    function($routeProvider) {
	    $routeProvider.
        
        when('/login', {
            templateUrl: 'login.html',
            controller: 'loginController'
        }).
        
        when('/signup', {
            templateUrl: 'signup.html',
            controller: 'signupController'
        });
    }
]);
