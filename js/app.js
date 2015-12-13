var myApp = angular.module('todo',['ngRoute'])

myApp.config(function ($routeProvider){
    
    $routeProvider
    .when('/',{
         templateUrl:'pages/main.html',
          controller:'todoController'
          })
    .when('/today',{
        templateUrl:'pages/today.html',
        controller:'todayController'
    })
     .when('/nextDays',{
        templateUrl:'pages/nextDays.html',
        controller:'nDayController'
    })
});

myApp.controller('todoController',['$scope', function($scope){
   
    $scope.handle='';
    
    $scope.tasks=[{title:'manger',
                   priority:'list-group-item-info'
                  },
                  {title:'dormir',
                   priority:'list-group-item-warning'
                  },
                  {title:'baiser',
                   priority:'list-group-item-danger'
                   }];
    
    
    $scope.addTask = function () {
        $scope.tasks.push({title:$scope.task,
                           priority:$scope.priority});
         
    }
    $scope.removeTask=function(task)
    {
        var newTasks=[];
        
        for(var i=0;i< $scope.tasks.length;i++)
          {
              console.log(task,$scope.tasks[i].title)
              
              if(task!==$scope.tasks[i].title)
              {
                 newTasks.push($scope.tasks[i]);
              }
          }
     
         $scope.tasks=newTasks;
          console.log($scope.tasks);
    }
  
  
}]);
myApp.controller('todayController',['$scope', function($scope)
                                    {
                                        $scope.title= 'Aujourdhui';
                                    }]);
myApp.controller('nDayController',['$scope', function($scope)
                                    {
                                        $scope.title= '7 prochains jours';
                                    }]);
  var injection = function (firstname,name,password,avatar){
        return 'jane Doe';
    }
 console.log(angular.injector().annotate(injection));
          