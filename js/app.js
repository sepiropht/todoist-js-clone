var routerApp = angular.module('todo', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('/',{
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
        templateUrl:'pages/etiquettes.html',
        controller:'tagsController'
    })
       .state('filtres',{
        templateUrl:'pages/filtres.html',
        controller:'filtresController'
    })
    
});


          