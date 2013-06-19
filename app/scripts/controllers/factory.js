'use strict';

<<<<<<< HEAD
relayServicesApplication.factory('ReconciliationService', [ '$http', function (http) {
=======
relayServicesApplication.factory('ServicesFactory', function ($http) {
>>>>>>> parent of fb1fac5... refactoring
    return {
            reconcileEmployee: function(emplid, $scope) {

                var updateUrl = '/pshr-listener/rest/employee/update/';

                http.put(updateUrl, 'emplid=' + emplid).success(function(data) { $scope.response = data; });
            }
        };
    }]);
