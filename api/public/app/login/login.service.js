(function() {
    'use strict';
    angular.module('todo')
        .factory('LoginService', LoginService)
        .factory('AuthToken', AuthToken)
        .factory('AuthInterceptor', AuthInterceptor);



    function LoginService($http, $q, AuthToken,$state) {

        var authFactory = {}

        authFactory.login = function(username, password) {
            return $http.post('/api/login', {
                    username: username,
                    password: password
                })
                .success(function(data) {
                    AuthToken.setToken(data.token);
                    return data;
                })
        }
        authFactory.logout = function() {
            AuthToken.setToken();
            $state.go('login');
        }

        authFactory.isLoggedIn = function() {
            if (AuthToken.getToken()) {
                return true;
            }
            return false;
        }

        authFactory.getUser = function() {
            if (AuthToken.getToken())
                return $http.get('/api/me')
            else
                return $q.reject({
                    message: "User has no token"
                })
        }
        return authFactory;
    }

    function AuthToken($window) {
        var authFactory = {};
        authFactory.getToken = function() {
            return $window.localStorage.getItem('token');
        }
        authFactory.setToken = function(token) {
            if (token)
                $window.localStorage.setItem('token', token);
            else
                $window.localStorage.removeItem('token');
        }
        return authFactory;

    }

    function AuthInterceptor($q, $injector, AuthToken) {
      var interceptorFactory = {};

      interceptorFactory.request = function(config) {
        var token = AuthToken.getToken();
        if (token) {
          config.headers['x-access-token']= token;
        }
        return config;
      };

      interceptorFactory.responseError = function (response) {
        if(response.status == 403)
        //  $injector.get('$state').go('/login');
        return $q.reject(response);
      }
      return  interceptorFactory;
    }
})();
