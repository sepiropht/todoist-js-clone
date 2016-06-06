(function() {
  'use strict'
  angular.module('todo')
      .controller('SignupController', SignupController);

  function SignupController(UserDataService, $state, $window) {
    var vm = this;
    vm.signup = signup;

    function signup() {
      vm.message = '';
      UserDataService.create(vm.userData)
         .then( function (response) {
           //ToastService.showSuccess('User Create!');
           vm.userData = {};
           vm.message = response.data.message;
           
           $window.localStorage.setItem('token',response.data.token);
           $state.go('/main');
         })
    }

  }
})();
