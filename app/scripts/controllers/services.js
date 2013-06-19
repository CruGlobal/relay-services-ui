'use strict';

<<<<<<< HEAD
relayServicesApplication.controller('ServicesCtrl', ['$scope', 'ReconciliationService', function (model, service) {
    model.reconcileEmployee =
        function() {
            model.response = 'reconciliation of employee id ' + model.emplid + ' in progress ...';
            service.reconcileEmployee(model.emplid, model);
=======
relayServicesApplication.controller('ServicesCtrl', function ($scope, ServicesFactory) {
    $scope.reconcileEmployee =
        function() {
            $scope.response = 'reconciliation of employee id ' + $scope.emplid + ' in progress ...';
            ServicesFactory.reconcileEmployee($scope.emplid, $scope);
>>>>>>> parent of fb1fac5... refactoring
        };
    }]);
