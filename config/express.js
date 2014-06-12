require('./../app/models/todo');

module.exports = function (app) {
  app.use(require('body-parser')());

  // apply todo routes --------------------------
  require('./../app/routes/todo-routes')(app);

  // default route ------------------------------
  app.get('*', function (req, res) {
    res.sendfile('../public/index.html');
  });

};