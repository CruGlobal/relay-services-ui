var servicesFactory =
    function ($http) {
        var factory = {};

        var updaterest = 'http://localhost:9292/tlidma21.ccci.org:8083/pshr-listener/rest/employee/update/';

        factory.reconcileEmployee = function(emplid, $scope) {
            $http.put(updaterest, 'emplid=' + emplid).success(function(data) { $scope.response = data; });
        };

        return factory;
    };

relayServicesApplication.factory('ServicesFactory', servicesFactory);
