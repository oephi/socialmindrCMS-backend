const mongoose = require("mongoose");
const LogModel = require("../database/models/log_model");

async function show(req, res, next) {
  try {
    const { id } = req.params
    const client = await LogModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

module.exports = {
  show
}