const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NSCSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('NSC', NSCSchema);
