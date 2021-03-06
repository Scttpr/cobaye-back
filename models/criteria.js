const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const criteriaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  minAge: {
    type: Number,
  },
  maxAge: {
    type: Number,
  },
  category: {
    type: Number,
    default: 0,
  },
  created_at:
  {
    type: Date,
    default: new Date()
  },
  updated_at:
  {
    type: Date,
    default: new Date()
  },
});

module.exports = mongoose.model('Criteria', criteriaSchema);
