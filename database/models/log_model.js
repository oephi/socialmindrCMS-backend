const mongoose = require("mongoose");
const LogsSchema = require("../schema/log_schema");

const LogsModel = mongoose.model("Logs", LogsSchema);

module.exports = LogsModel;
