const { Schema } = require("mongoose");
const InviteCleanerSchema = require("./invite_cleaner_schema")
const InvitesSchema = require("./invite_schema")
const LogsSchema = require("./log_schema")
const MessageSchema = require("./message_schema")

const ClientSchema =  new Schema({
  job_title: {
    type: String,
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
  interval: Number,
  company_size: String,
  company_exclusion: Array,
  message: String,
  account_status: Boolean,
  verification_status: Boolean,
  server_status: Boolean

  // invites: [InvitesSchema]
});


module.exports = ClientSchema;



// Client
// (name, username, passwordTitle, location, industry, interval, size, exclude, message, server_id(FK), client_id)











