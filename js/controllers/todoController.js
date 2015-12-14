angular.module('todo')
.controller('todoController',todoControlller);
function todoControlller($scope){
   
    $scope.handle='';
    
    $scope.tasks=[{title:'manger',
                   priority:'list-group-item-info'
                  },
                  {title:'dormir',
                   priority:'list-group-item-warning'
                  },
                  {title:'learn angular',
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
  
  
};