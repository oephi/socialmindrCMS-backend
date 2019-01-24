const ClientModel = require("../database/models/client_model")
const InvitesCleanerModel = require("../database/models/invite_cleaner_model");
const InvitesModel = require("../database/models/invite_model");
const LogsModel = require("../database/models/log_model");
const MessageModel = require("../database/models/message_model")
const mongoose = require("mongoose");

async function create(req, res) {
  const { name, email, password } = req.body;
  const client =  await ClientModel.create({ name, email, password })
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients`);

}

async function index(req, res, next) {
  // console.log(req.session.user)   
  try {
      const clients = await ClientModel.find();
      return res.json(clients);
  } catch (err) {
      return next(err);
  }
}

async function patch(req, res, next) {
  // console.log(req.params.id)

  const { id } = req.params
  try {
    await ClientModel.findById(id, (err,  x) => {
      if(req.body._id){
        delete req.body._id
      }
      for( let b in req.body ){
        x[b] = req.body[b];
      }
      x.save();
      res.json(x)
      
      console.log(req.body._id)
    });
    // return res.json(client);
} catch (err) {
    return next(err);
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

async function showCleaner(req, res, next) {
  try {
    const { id } = req.params;
    const client = await InvitesCleanerModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

async function showInvites(req, res, next) {
  try {
    const { id } = req.params
    const client = await InvitesModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

async function showLogs(req, res, next) {
  try {
    const { id } = req.params
    const client = await LogsModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

async function showMessage(req, res, next) {
  try {
    const { id } = req.params
    const client = await MessageModel.find({client: mongoose.Types.ObjectId(id)});
    return res.json(client);
  } catch(err) {
    return next(err);
  }
}

module.exports = {
  create,
  index,
  patch,
  showClient,
  showCleaner,
  showInvites,
  showLogs,
  showMessage
}