const mongoose = require("mongoose");
const InvitesCleanerSchema = require("../schema/invites_cleaner_schema");

const InvitesCleanerModel = mongoose.model("Invites_cleaner", InvitesCleanerSchema);

module.exports = InvitesCleanerModel;
