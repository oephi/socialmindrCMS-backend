const { Schema } = require("mongoose");

const ClientSchema =  new Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: Array,
    trim: true
  },
  industry: {
    type: String,
    trim: true
  },
  interval: {
    type: Number
  },
  size: {
    type:Number
  },
  exlude: {
    type: Array
  },
  message: {
    type: String
  },  
});

module.exports = ClientSchema;



// Client
// (name, username, passwordTitle, location, industry, interval, size, exclude, message, server_id(FK), client_id)











