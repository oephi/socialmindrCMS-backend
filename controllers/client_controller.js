const ClientModel = require("../database/models/client_model")

async function create(req, res) {
  let { name, username, password } = req.body;
  let client =  await ClientModel.create({ name, username, password })
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients/show/${client._id}`);

}

async function index(req, res, next) {
    try {
      const clients = await ClientModel.find();
      return res.json(clients);
  } catch (err) {
      return next(err);
  }
}

async function show(req, res) {
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
  show
}