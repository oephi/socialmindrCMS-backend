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
  linkedin_id: {
    type: String,
    required: true
  }
});

module.exports = InvitesSchema;