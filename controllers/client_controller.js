const ClientModel = require("../database/models/client_model")
const LogsModel = require("../database/models/log_model");
const MessageModel = require("../database/models/message_model")
const mongoose = require("mongoose");

async function createClient(req, res) {
  const { name, email, password } = req.body;
  const client =  await ClientModel.create({ name, email, password })
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients/${client._id}`);

}

async function showClients(req, res, next) {
  // console.log(req.session.user)   
  try {
      const clients = await ClientModel.find();
      return res.json(clients);
  } catch (err) {
      return next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    const client = await ClientModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(client); 
  } catch (err) {
    return next(err)
  }
}

async function deleteClient(req, res, next) {
  try {
    const client = await ClientModel.findByIdAndRemove(req.params.id);
    return res.json(client);
  } catch (err) {
    return next(err)
  }
}

async function showClient(req, res, next) {
  try {
    const { id } = req.params;
    const client = await ClientModel.findById(id);
    return res.json(client);
  } catch(err) {
      return next(err);
  }
}

// async function showMessage(req, res, next) {
//   try {
//     const { id } = req.params
//     const client = await MessageModel.find({client: mongoose.Types.ObjectId(id)});
//     return res.json(client);
//   } catch(err) {
//     return next(err);
//   }
// }

module.exports = {
  createClient,
  showClients,
  updateClient,
  deleteClient,
  showClient,
  // showMessage
}