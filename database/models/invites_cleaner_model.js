const mongoose = require("mongoose");
const InvitesCleanerSchema = require("../schema/invites_cleaner_schema");

const InvitesCleanerModel = mongoose.model("invites_cleaner", InvitesCleanerSchema);

module.exports = InvitesCleanerModel;
