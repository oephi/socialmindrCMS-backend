const mongoose = require("mongoose");
const InviteCleanerModel = require("../database/models/invite_cleaner_model");


// Handler to show invite cleaner information related to client with current id
async function show(req, res, next) {
  try {
    const { id } = req.params;
    // Retrieve invite cleaner information for the client with this id
    const client = await InviteCleanerModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

module.exports = {
  show
}