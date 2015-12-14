angular
  .module('todo')
  .controller('filtresController', filtresController);

function filtresController ($scope) {
  $scope.filtre='nous sommes dans un filtre';
}
