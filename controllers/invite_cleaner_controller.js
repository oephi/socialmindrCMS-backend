const mongoose = require("mongoose");
const InviteCleanerModel = require("../database/models/invite_cleaner_model");

async function show(req, res, next) {
  try {
    const { id } = req.params;
    const client = await InviteCleanerModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

module.exports = {
  show
}