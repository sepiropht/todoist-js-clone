angular
  .module('todo')
  .controller('nDayController', nDayController);

function nDayController ($scope) {
  $scope.title='7 prochains jours';
}
