require('./../app/models/todo');

module.exports = function (app) {

  // apply middleware ---------------------------
  app.use(require('body-parser')());
  app.use(require('method-override')());

  // apply todo routes --------------------------
  require('./../app/routes/todo-routes')(app);

  // default route ------------------------------
  app.get('*', function (req, res) {
    res.sendfile('../public/index.html');
  });

};