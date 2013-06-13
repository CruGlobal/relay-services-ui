'use strict';

relayServicesApplication.controller('ServicesCtrl', function ($scope, ServicesFactory) {
    $scope.reconcileEmployee =
        function() {
            $scope.response = 'reconciliation of employee id ' + $scope.emplid + ' in progress ...';
            ServicesFactory.reconcileEmployee($scope.emplid, $scope);
        };
    }
);
