/**
 * RUN: Access-control at state change
 */
(function () {
    'use strict';


    angular
        .module('todo')
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
})();
