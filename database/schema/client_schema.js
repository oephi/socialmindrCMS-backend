const { Schema } = require("mongoose");

const ClientSchema =  new Schema({
  job_title: {
    type: Array,
    // required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    // required: true
  },
  location: {
    type: Array,
    // trim: true
  },
  industry: {
    type: Array,
    trim: true
  },
  account_status: {
    type: Boolean,
    default: false
  },
  verification_code: {
    type: String,
    default: 123456
  },
  verification_status: {
    type: Boolean,
    default: false
  }, 
  server_status: {
    type: Boolean,
    default: false
  },
  interval: Number,
  company_size: Array,
  company_exclusion: Array,
  client_notes: String,
  message: String,

  // invites: [InvitesSchema]
});


module.exports = ClientSchema;














