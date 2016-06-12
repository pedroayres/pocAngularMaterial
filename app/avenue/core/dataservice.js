(function () {
    'use strict';

    angular
        .module('avenueCodeApp')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q'];
    /* @ngInject */
    function dataservice($http, $q) {
        var service = {
            getFeed: getFeed,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getFeed() {
            return $http.get('/feed/api.json')
                .then(success);

            function success(response) {
                return response.data;
            }


        }
    }
})();
