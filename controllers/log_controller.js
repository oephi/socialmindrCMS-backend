const mongoose = require("mongoose");
const LogModel = require("../database/models/log_model");

// Handler to show log information related to client with current id 
async function show(req, res, next) {
  try {
    const { id } = req.params
    const client = await LogModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

async function create(req, res, next) {
  const { id, server_message, timestamp, client } = req.body;
  // Create log with destuctured values
  const log =  await LogModel.create({ id, server_message, timestamp, client }) 
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients/${log.client}`);

}

module.exports = {
  show,
  create
}
