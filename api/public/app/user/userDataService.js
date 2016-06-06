(function() {
  'use strict'
  angular.module('todo')
      .factory('UserDataService', UserDataService);

  function UserDataService($http) {
    var userFactory = {};
    userFactory.create = function(userData) {
      return $http.post('/api/signup', userData)

    }
    return userFactory
  }
})();
