const mongoose = require("mongoose");
const MessageSchema = require("../schema/message_schema");

const MessageModel = mongoose.model("message", MessageSchema);

module.exports = MessageModel;
