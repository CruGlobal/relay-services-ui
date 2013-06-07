'use strict';

angular.module('relayServicesApp')
.factory('ServicesFactory', function ($http) {
                                        var factory = {};
                                        var updaterest = '/pshr-listener/rest/employee/update/';
                                        factory.reconcileEmployee = function(emplid, $scope) {
                                            $http.put(updaterest, 'emplid=' + emplid).success(function(data) { $scope.response = data; });
                                        };
                                        return factory;
                                    })
.controller('ServicesCtrl', function ($scope, ServicesFactory) {
                                      $scope.reconcileEmployee = function()
                                      {
                                        $scope.response = 'reconciliation in progress ...';
                                        ServicesFactory.reconcileEmployee($scope.emplid, $scope);
                                      };
                                     });
