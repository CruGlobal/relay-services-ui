'use strict';

relayServicesApplication.factory('ReconciliationService', [ '$http', function (http) {
    return {
            reconcileEmployee: function(emplid, $scope) {

                var updateUrl = '/pshr-listener/rest/employee/update/';

                http.put(updateUrl, 'emplid=' + emplid).success(function(data) { $scope.response = data; });
            }
        };
    }]);
