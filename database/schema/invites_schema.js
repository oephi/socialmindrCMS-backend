const { Schema } = require("mongoose");

const InvitesSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  },
  industry: {
    type: String,
  },
  title: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  linkedinId: {
    type: String,
    required: true
  },

  //Client reference
  user: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});

module.exports = InvitesSchema;