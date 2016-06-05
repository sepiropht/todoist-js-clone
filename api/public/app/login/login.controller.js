(function() {
    'use strict'
    angular.module('todo')
        .controller('LoginController', LoginController);

    function LoginController($rootScope, $state, LoginService) {
        var vm = this;

        vm.loggedIn = LoginService.isLoggedIn;
        vm.doLogin = doLogin;
        vm.doLogout = logout;

        $rootScope.$on('$routeChangeStart', function() {
            if (vm.loggedIn) {
                LoginService.getUser()
                    .then(function(data) {
                        vm.user = data.data
                    });
            }
        });

        function logout() {
            LoginService.logout()
            $state.go('/logout');
        }

        function doLogin() {
            debugger;
            console.log('yeah');
            vm.processing = true;
            vm.error = '';
            LoginService.login(vm.loginData.username, vm.loginData.password)
                .success(function(data) {
                    vm.processing = false;
                    LoginService.getUser()
                        .then(function(data) {
                            vm.user = data.data;
                            console.log(data);
                        });
                    if (data.success) {
                        $state.go('/main');
                    } else {
                        vm.error = data.message;
                    }
                });

        }
    };
})();
