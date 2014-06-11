module.exports = function (app) {
  // apply routes -------------------------------
  require('./routes/todo-routes')(app);

  // default route ------------------------------
  app.get('*', function (req, res) {
    res.sendfile('../public/index.html');
  });

};