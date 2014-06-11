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