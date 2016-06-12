(function() {
'use strict';

    angular
     .module('avenueCodeApp')
     .controller('PerfilCtrl', PerfilCtrl); 
     PerfilCtrl.$inject = ['dataservice'];
     
    function PerfilCtrl(dataservice) {
    	var self = this;
        self.info = {}
        self.currentUser = currentUser();
        getFeed();
        
        function getFeed() {
            return dataservice.getFeed().then(function (data) {
                self.info = data.perfil;
                return self.info;
            });
        }

        function currentUser() {
            return 1;
        }

    }
})();
