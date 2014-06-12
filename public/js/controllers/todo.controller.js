angular.module('controllers.TodoCtrl', ['services.TodoService'])
  .controller('TodoCtrl', [
    '$scope', 'Todos',
    function ($scope, Todos) {
      $scope.todos = Todos.query();

      $scope.add = function (text) {
        var todo = new Todos({
          text: text,
          completed: false
        });

        todo.$save(function (success) {
          $scope.todos.push(todo);
        }, function (error) {
          console.log(error);
        });
      };

      $scope.update = function (todo) {
        todo.$update(function (success) {
        }, function (error) {
          console.log(error);
        });
      };

      $scope.remove = function (todo) {
        todo.$remove();

        for (var i in $scope.todos) {
          if ($scope.todos[i] === todo) {
            $scope.todos.splice(i, 1);
          }
        }
      };
    }
  ]);