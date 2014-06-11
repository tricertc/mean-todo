angular.module('todoApp.TodoCtrl', [])
.controller('TodoCtrl', [
    '$scope',
    function ($scope) {
      $scope.todos = [];
    }
  ]);