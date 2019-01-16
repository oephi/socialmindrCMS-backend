const mongoose = require("mongoose");
const ClientSchema = require("../schema/client_schema");

const ClientModel = mongoose.model("client", ClientSchema);

module.exports = ClientModel;
