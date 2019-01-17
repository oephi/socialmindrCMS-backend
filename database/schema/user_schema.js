const { Schema } = require("mongoose");

const UserSchema =  new Schema({
  email: String,
  hash: String,
  salt: String
});

module.exports = UserSchema;
