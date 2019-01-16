const { Schema } = require("mongoose");

const LogsSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  errors: {
    type: String,
  }
});

module.exports = LogsSchema;