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
  },

  //Client reference
  user: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});

module.exports = MessageSchema;

