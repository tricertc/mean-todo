require('./models/todo');

module.exports = function (app) {
  // apply todo routes --------------------------
  require('./routes/todo-routes')(app);

  // default route ------------------------------
  app.get('*', function (req, res) {
    res.sendfile('../public/index.html');
  });

};