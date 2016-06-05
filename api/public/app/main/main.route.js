( function() {
  'use strict';


  angular
    .module( 'todo' )
    .config( Routing );

  function Routing( $stateProvider ) {
    $stateProvider
      .state( 'main' ,{
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'TodoController as vm'
      } );
  }

} )();
