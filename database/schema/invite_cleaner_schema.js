const { Schema } = require("mongoose");

const InviteCleanerSchema =  new Schema ({
  timestamp: {
    type: Date,
    default: Date.now
  },
  number_deleted: {
    type: Number,
  },
  invites_remaining: {
    type: Number
  }
});

module.exports = InviteCleanerSchema