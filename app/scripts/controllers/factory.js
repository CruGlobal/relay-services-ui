'use strict';

relayServicesApplication.factory('ServicesFactory', function ($http) {
    return {
     reconcileEmployee: function(emplid, $scope) {
            var updaterest = '/pshr-listener/rest/employee/update/';
            $http.put(updaterest, 'emplid=' + emplid).success(function(data) { $scope.response = data; });
            }
    };
});
