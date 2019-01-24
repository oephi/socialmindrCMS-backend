const { Schema } = require("mongoose");

const MessageSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  linkedin_id: {
    type: String,
  },
  accept_time : {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
  },

  //Client reference
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});

module.exports = MessageSchema;

