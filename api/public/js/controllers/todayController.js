angular.module('todo')
.controller('todayController',todayController); 

function todayController($scope)
                                    {
                                        $scope.title= 'Aujourdhui';
                                    };