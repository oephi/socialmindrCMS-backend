const { Schema } = require("mongoose");

const LogsSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  errors: {
    type: String,
  },
  
  //Client reference
  user: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});

module.exports = LogsSchema;