(function() {
'use strict';

    angular
     .module('avenueCodeApp')
     .controller('RequestListCtrl', RequestListCtrl); 
    RequestListCtrl.$inject = ['dataservice'];
     
    function RequestListCtrl(dataservice) {
      var self = this;
      self.requestList = {}
      getRequestList();

      function getRequestList() {
          return dataservice.getFeed().then(function (data) {
              self.requestList = data.requestList;
              return self.requestList;
          });
      }
    }
})();
