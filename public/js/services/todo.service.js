angular.module('services.TodoService', [])
  .factory('Todos', [
    '$resource',
    function ($resource) {
      return $resource('/todos/:todoId', {
        todoId: '@_id'
      }, {
        update: { method: 'PUT' }
      });
    }
  ]);