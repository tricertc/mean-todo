require('./models/todo');

module.exports = function (app) {
  app.use(require('body-parser')());

  // apply todo routes --------------------------
  require('./routes/todo-routes')(app);

  // default route ------------------------------
  app.get('*', function (req, res) {
    res.sendfile('../public/index.html');
  });

};