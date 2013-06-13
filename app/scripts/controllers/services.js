'use strict';

var servicesController =
    function ($scope, ServicesFactory) {
        $scope.reconcileEmployee =
            function() {
                $scope.response = 'reconciliation in progress ...';
                ServicesFactory.reconcileEmployee($scope.emplid, $scope);
            };
    };

relayServicesApplication.controller('ServicesCtrl', servicesController);
