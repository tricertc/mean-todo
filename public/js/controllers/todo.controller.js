angular.module('controllers.TodoCtrl', ['services.TodoService'])
  .controller('TodoCtrl', [
    '$scope', 'Todos',
    function ($scope, Todos) {
      $scope.todos = Todos.query();
    }
  ]);