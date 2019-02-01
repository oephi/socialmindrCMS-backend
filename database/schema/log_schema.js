const { Schema } = require("mongoose");

const LogsSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  error_log: {
    type: String,
  },
  server_message: {
    type: String
  },
  
  //Client reference
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});

module.exports = LogsSchema;