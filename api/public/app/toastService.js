// ( function() {
//   'use strict';
//
//
//   angular
//     .module( 'todo' )
//     .factory( 'ToastService', [ 'ngToast', toastServiceFactory ] );
//
//   function toastServiceFactory( ngToast ) {
//     return {
//       showSuccess: function( message ) {
//         ngToast.create( {
//           content: message,
//           class: 'success'
//         } );
//       },
//       showError: function( message ) {
//         ngToast.create( {
//           content: message,
//           class: 'error'
//         } );
//
//         console.error( message );
//       },
//       showWarning: function( message ) {
//         ngToast.create( {
//           content: message,
//           class: 'warning'
//         } );
//       }
//     };
//   }
//
// } )();
