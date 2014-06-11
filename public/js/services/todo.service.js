angular.module('services.TodoService', [])
  .factory('Todos', [
    '$resource',
    function ($resource) {
      return $resource('/todos/:id');
    }
  ]);