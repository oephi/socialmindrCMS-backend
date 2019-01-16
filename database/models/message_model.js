const mongoose = require("mongoose");
const MessageSchema = require("../schema/message_schema");

const MessageModel = mongoose.model("Messages", MessageSchema);

module.exports = MessageModel;
