var express = require('express')
  , mongoose = require('mongoose')
  , db = require('./config/db')
  , app = express()
  , port = process.env.PORT || 8080;

// connect to database --------------------------
mongoose.connect(db.url);
console.log('Connected to db @ ' + db.url);

// configure server -----------------------------
app.use(express.static(__dirname + '/public'));
require('./config/config')(app);

// start server ---------------------------------
app.listen(port);
console.log('Server started on port ' + port);