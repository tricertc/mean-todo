var mongoose = require('mongoose')
  , Todo = mongoose.model('Todo')
  , _ = require('lodash');

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

exports.update = function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) {
      res.send(err);
    }

    _.extend(todo, req.body);
    todo.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.jsonp(todo);
    });
  });
};