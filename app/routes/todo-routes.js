var todos = require('../controllers/todo-controller');

module.exports = function (app) {

  app.route('/todos')
    .get(todos.list)
    .post(todos.create);

};