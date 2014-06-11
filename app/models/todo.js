var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Todo', TodoSchema);