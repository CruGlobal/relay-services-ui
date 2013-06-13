'use strict';

var relayServicesApplication =
    angular.module('relayServicesApp', [])
      .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/services.html',
            controller: 'ServicesCtrl'
          })
          .when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServicesCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
