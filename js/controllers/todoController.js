angular.module('todo')
.controller('todoController',todoControlller);
function todoControlller($scope,tasks){
   
    $scope.handle='';
    
    $scope.tasks= tasks.getTasks();;
    
    
    $scope.addTask =  function () {
        tasks.addTask($scope.task,$scope.priority);
    }
    
    $scope.removeTask=function(taskTitle)
    {
        tasks.removeTask(taskTitle);
    }
  
  
};