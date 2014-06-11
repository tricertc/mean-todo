var mongoose = require('mongoose')
  , Todo = mongoose.model('Todo');

exports.list = function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      res.send(err);
    }
    res.jsonp(todos);
  });
};

exports.create = function (req, res) {
  var todo = new Todo(req.body);
  todo.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.jsonp(todo);
  });
};