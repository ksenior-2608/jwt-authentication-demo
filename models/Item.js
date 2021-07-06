const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('config');
// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = Item = mongoose.model('demo', ItemSchema);