const ClientModel = require("../database/models/client_model")

async function create(req, res) {
  let { name, username, password } = req.body;
  let client =  await ClientModel.create({ name, username, password })
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients/show/${client._id}`);

}

async function index(req, res) {
  let clients = await ClientModel.find()
  res.render("/clients/index", {clients})
}

async function show(req, res) {
  let { id } = req.params

}

module.exports = {
  create,
  index
}