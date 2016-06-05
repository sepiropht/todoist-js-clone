( function() {
  'use strict';


  angular
    .module( 'todo' )
    .config( Routing );

  function Routing( $stateProvider ) {
    $stateProvider
      .state( 'login' ,{
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController as vm'
      } );
  }

} )();
