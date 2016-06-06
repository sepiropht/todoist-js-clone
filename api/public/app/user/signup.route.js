( function() {
  'use strict';


  angular
    .module( 'todo' )
    .config( Routing );

  function Routing( $stateProvider ) {
    $stateProvider
      .state( 'signup' ,{
        url: '/signup',
        templateUrl: 'app/user/signup.html',
        controller: 'SignupController as vm'
      } );
  }

} )();
