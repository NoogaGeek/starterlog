'use strict';

// common.js
angular.module('starterlog')
    .config(['$routeProvider',
        function($routeProvider) {
	       $routeProvider.
        
            when('/', {
                templateUrl: 'common/home.html',
                controller: 'homeController'
            }).
            
            when('/about', {
                templateUrl: 'common/about.html',
                controller: 'aboutController'
            }).

            when('/features', {
                templateUrl: 'common/features.html',
                controller: 'featuresController'
            }).
            
            when('/pricing', {
                templateUrl: 'common/pricing.html',
                controller: 'pricingController'
            }).

            otherwise({
                redirectTo: '/'
            });
        }
    ])
    .controller('homeController', function ($scope) {
        // really cool code goes here  
    })
    .controller('aboutController', function ($scope) {
        // really cool code goes here  
    })
    .controller('featuresController', function ($scope) {
        // really cool code goes here
    })
    .controller('pricingController', function ($scope) {
        // really cool code goes here  
    });
