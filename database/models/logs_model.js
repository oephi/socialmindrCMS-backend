const mongoose = require("mongoose");
const LogsSchema = require("../schema/logs_schema");

const LogsModel = mongoose.model("logs", LogsSchema);

module.exports = LogsModel;
