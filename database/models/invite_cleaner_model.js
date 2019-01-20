const mongoose = require("mongoose");
const InviteCleanerSchema = require("../schema/invite_cleaner_schema");

const InviteCleanerModel = mongoose.model("Invite_cleaner", InviteCleanerSchema);

module.exports = InviteCleanerModel;
