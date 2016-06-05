angular.module('todo')
.service('tasks',tasks);
    function tasks(){
   
    var self=this;
     
    this.tasks=[{title:'manger',
                   priority:'list-group-item-info'
                  },
                  {title:'dormir',
                   priority:'list-group-item-warning'
                  },
                  {title:'learn angular',
                   priority:'list-group-item-danger'
                   }];
    
     this.addTask = function (title,priority) {
        self.tasks.push({title:title,
                           priority:priority});
         
     }
         
    this.removeTask=function(taskTitle){
        var newTasks=[];
          console.log("avant function");
        console.log(self.tasks);
        for(var i=0; i< self.tasks.length;i++)
          {
              console.log(taskTitle,self.tasks[i].title)
              
              if(taskTitle!==self.tasks[i].title)
              {
                 newTasks.push(self.tasks[i]);
              }
          }
        
         console.log("après function");
        console.log(self.tasks);
        return  self.tasks = newTasks;
         
    }
    this.getTasks = function()
       {
           return self.tasks;
       }
    
}