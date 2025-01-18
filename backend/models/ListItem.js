const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
  item: {
    type: String,
    trim: true,
  }
});

// Using mongoose.model(), it inherits various methods and functionalities from..
// ..Mongoose, including findOne(), find(), save(), update(), and more.
module.exports = mongoose.model('ListItem', listItemSchema);
