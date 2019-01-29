const mongoose = require("mongoose");
const InviteModel = require("../database/models/invite_model");

async function show(req, res, next) {
  try {
    const { id } = req.params
    const client = await InviteModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

module.exports = {
  show
}