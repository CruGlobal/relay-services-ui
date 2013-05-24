'use strict';

angular.module('relayServicesApp')
  .controller('ServicesCtrl', function ($scope,$http) {
              $scope.emplid = "";
              $scope.response = "";

  $scope.reconcileEmployee = function () {
              $http.get('http://localhost:9292/tlidma21.ccci.org:8083/pshr-listener/rest/user/update/'+ $scope.emplid).success(function(data) { $scope.response = data });
              $scope.emplid = "";
              $scope.response = "";
            };
  });
