const mongoose = require("mongoose");
const InvitesSchema = require("../schema/invites_schema");

const InvitesModel = mongoose.model("Invites", InvitesSchema);

module.exports = InvitesModel;
