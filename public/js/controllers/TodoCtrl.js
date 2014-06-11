angular.module('TodoCtrl', [])
.controller('todoController', [
    '$scope',
    function ($scope) {
      $scope.todos = [];
    }
  ]);