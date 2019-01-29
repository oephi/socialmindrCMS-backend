const mongoose = require("mongoose");
const MessageModel = require("../database/models/message_model");

async function show(req, res, next) {
    try {
      const { id } = req.params
      const client = await MessageModel.find({client: mongoose.Types.ObjectId(id)});
      return res.json(client);
    } catch(err) {
      return next(err);
    }
  }

  module.exports = {
    show
  }