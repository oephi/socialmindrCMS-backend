const { Schema } = require("mongoose");

const InviteCleanerSchema =  new Schema ({
  timestamp: {
    type: Date,
    default: Date.now
  },
  number_deleted: { type: Number },
  invites_remaining: { type: Number },
  
  //Client reference
  user: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});


module.exports = InviteCleanerSchema