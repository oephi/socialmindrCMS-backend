const mongoose = require("mongoose");
const InvitesSchema = require("../schema/invites_schema");

const InvitesModel = mongoose.model("invites", InvitesSchema);

module.exports = InvitesModel;
