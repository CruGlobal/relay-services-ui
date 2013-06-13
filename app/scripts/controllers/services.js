'use strict';

relayServicesApplication.controller('ServicesCtrl', function ($scope, ReconciliationService) {
    $scope.reconcileEmployee =
        function() {
            $scope.response = 'reconciliation of employee id ' + $scope.emplid + ' in progress ...';
            ReconciliationService.reconcileEmployee($scope.emplid, $scope);
        };
    }
);
