angular.module('todo')
.controller('TodoController',TodoControlller);
function TodoControlller($scope,tasks,$http,LoginService){

    var vm = this;
    vm.handle='';
    vm.priority = 'Cool';
    LoginService.getUser().
     then(function (response) {
       debugger;
       $http.get('/api',{ creator: response.data.id})
       .then(function(response1) {
         vm.tasks = response1.data;
         console.log(response.data);
       });
       vm.user =  response.data.id ;
     })


    vm.addTask =  function (task) {

        //tasks.addTask(task,vm.priority);
        $http.post('/api/',{
          creator: vm.user,
          title: task.taskTitle,
          priority: vm.priority
        });

        vm.tasks.push({title:task.taskTitle,priority:vm.priority});
    }

    vm.removeTask=function(task)
    {
        vm.tasks.splice(vm.tasks.indexOf(task),1);

    }


};
