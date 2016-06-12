(function() {
  'use strict';
  angular
    .module('avenueCodeApp', [
      'ngAnimate',
      'ngMessages',
      'ngRoute',
      'ngSanitize',
      'ngMaterial',
      'angular-toArrayFilter'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'avenue/requestlist/requestlist.html',
          controller: 'RequestListCtrl',
          controllerAs: 'request'
        })
        .when('/listaddress', {
          templateUrl: 'avenue/addresslist/addresslist.html',
          controller: 'AddressListCtrl',
          controllerAs: 'address'
        })
        .when('/perfil', {
          templateUrl: 'avenue/perfil/perfil.html',
          controller: 'PerfilCtrl',
          controllerAs: 'perfil'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
