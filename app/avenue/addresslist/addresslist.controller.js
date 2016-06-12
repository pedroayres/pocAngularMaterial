(function() {
'use strict';

	angular
	 .module('avenueCodeApp')
	 .controller('AddressListCtrl', AddressListCtrl); 
	 AddressListCtrl.$inject = ['dataservice'];
	 
	function AddressListCtrl(dataservice) {
    	var self = this;
        self.info = {};
        getFeed();
        
        function getFeed() {
            return dataservice.getFeed().then(function (data) {
                self.info = data.perfil;
                return self.info;
            });
        }

		
	}
})();
