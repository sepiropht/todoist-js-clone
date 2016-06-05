var routerApp = angular.module('todo', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home',{
         url: '/home',
         templateUrl:'app/home.html',
          })
    .state('/main',{
         templateUrl:'pages/main.html',
          controller:'todoController'
          })
    .state('today',{
        templateUrl:'pages/today.html',
        controller:'todayController'
    })
     .state('nextDays',{
        templateUrl:'pages/nextDays.html',
        controller:'nDayController'
    })
     .state('projets',{
        templateUrl:'pages/projets.html',
        controller:'projetsController'
    })
       .state('etiquettes',{
        templateurl:'pages/etiquettes.html',
        controller:'tagsController'
    })
       .state('filtres',{
        url:'filtres',
        view: {

          '': { templateUrl:'index.html'
              },

              'columnFiltre@filtres':{ template :'pages/filtre.html',
               controller:'filtresController'
              }

    }
    })

});
