var todos = require('../controllers/todo-controller');

module.exports = function (app) {

  app.route('/todos')
    .get(todos.list)
    .post(todos.create);

  app.route('/todos/:id')
    .put(todos.update)
    .delete(todos.delete);
};