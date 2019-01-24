const mongoose = require("mongoose");
const InvitesSchema = require("../schema/invite_schema");

const InvitesModel = mongoose.model("Invites", InvitesSchema);

module.exports = InvitesModel;
