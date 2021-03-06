const { Schema } = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({});

UserSchema.plugin(passportLocalMongoose , { usernameField: "email" });

module.exports = UserSchema;
