angular
  .module('todo')
  .controller('filtresController', filtresController);

function filtresController ($scope) {
  $scope.title='nous sommes dans un filtre';
}
