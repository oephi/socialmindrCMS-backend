const ClientModel = require("../database/models/client_model");
const mongoose = require("mongoose");

async function create(req, res) {
  const { name, email, password } = req.body;
  const client =  await ClientModel.create({ name, email, password })
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients/${client._id}`);

}

async function index(req, res, next) {
  try {
      const clients = await ClientModel.find();
      return res.json(clients);
  } catch (err) {
      return next(err);
  }
}

async function update(req, res, next) {
  try {
    const client = await ClientModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(client); 
  } catch (err) {
    return next(err)
  }
}

async function destroy(req, res, next) {
  try {
    const client = await ClientModel.findByIdAndRemove(req.params.id);
    return res.json(client);
  } catch (err) {
    return next(err)
  }
}

async function show(req, res, next) {
  try {
    const { id } = req.params;
    const client = await ClientModel.findById(id);
    return res.json(client);
  } catch(err) {
      return next(err);
  }
}

module.exports = {
  create,
  index,
  update,
  destroy,
  show,
  // showMessage
}