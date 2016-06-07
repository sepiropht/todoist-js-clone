/**
 * RUN: Access-control at state change
 */
(function() {
    'use strict';


    angular
        .module('todo')
        .config(configureAuthInjection)
        .controller('MainController',MainController)
        .run(run);

    function run($rootScope, $state, LoginService) {
        $rootScope.$on('$stateChangeStart', function() {
            if (LoginService.isLoggedIn) {
                LoginService.getUser()
                    .then(function(data) {
                        console.log(data);
                    });
            }
        });

    }

    function configureAuthInjection($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }

    function MainController (LoginService) {
      var vm = this;
      vm.isLoggedIn = LoginService.isLoggedIn();
      vm.logout = LoginService.logout;
      console.log('yeah');
    }
})();
