'use strict';

relayServicesApplication.controller('ServicesCtrl', ['$scope', 'ReconciliationService', function (model, service) {
    model.reconcileEmployee =
        function() {
            model.response = 'reconciliation of employee id ' + model.emplid + ' in progress ...';
            service.reconcileEmployee(model.emplid, model);
        };
    }]);
