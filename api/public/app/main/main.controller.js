angular.module('todo')
.controller('TodoController',TodoControlller);
function TodoControlller($scope,tasks){
  debugger;
    var vm = this;
    vm.handle='';
    vm.priority = 'Cool';
    vm.tasks= tasks.getTasks();;


    vm.addTask =  function (task) {
      debugger;
        tasks.addTask(task,vm.priority);
    }

    vm.removeTask=function(taskTitle)
    {
        vm.tasks = tasks.removeTask(taskTitle);

    }


};
