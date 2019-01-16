const { Schema } = require("mongoose");

const MessageSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  linkedin_id: {
    type: String,
    required: true
  },
  accept_time : {
    type: Date,
    default: Date.now,
    required: true
  },
  deleted: {
    type: Boolean,
    required: true
  }
});

module.exports = MessageSchema;

// Tab 2 - Message
// (client_id(FK), timestamp, linkedin_id, accept_time, deleted)
