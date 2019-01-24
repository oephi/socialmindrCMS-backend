const { Schema } = require("mongoose");

const InvitesSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  industry: {
    type: String,
  },
  title: {
    type: String
  },
  location: {
    type: String
  },
  linkedinId: {
    type: String
  },

  //Client reference
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
});

module.exports = InvitesSchema;