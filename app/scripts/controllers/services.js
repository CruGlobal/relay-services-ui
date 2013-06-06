'use strict';

var protocols = { unsecure : 'http://' , secure : 'https://' };
var proxys = { yes : 'localhost:9292/', no : ''};
var hosts = { test : 'tlidma21.ccci.org:8083', prod : 'signin.ccci.ccci.org' };
var updaterest = '/pshr-listener/rest/employee/update/';

var protocol = protocols.unsecure;
var proxy = proxys.yes;
var host = hosts.test;

var url = protocol + proxy + host + updaterest;

var servicesFactory =
        function ($http) {
            var factory = {};
            factory.reconcileEmployee = function(emplid, $scope) {
                $http.put(url, 'emplid=' + emplid).success(function(data) { $scope.response = data });
            };
            return factory;
        };

var servicesController =
        function ($scope, ServicesFactory) {
          $scope.reconcileEmployee = function()
          {
            $scope.response = 'reconciliation attempt in progress ...';
            ServicesFactory.reconcileEmployee($scope.emplid, $scope);
          };
         };

angular.module('relayServicesApp')
.factory('ServicesFactory', servicesFactory)
.controller('ServicesCtrl', servicesController);
