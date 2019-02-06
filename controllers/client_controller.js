const mongoose = require("mongoose");
const ClientModel = require("../database/models/client_model");


// Create new client
async function create(req, res) {
  //Destructure values out of request body
  const { name, email, password } = req.body;
  // Create client with destuctured values
  const client =  await ClientModel.create({ name, email, password }) 
  .catch(err => res.status(500).send(err));

  res.redirect(`/clients/${client._id}`);

}

// Show all clients
async function index(req, res, next) {
  // console.log(req.session.token);  
  try {
      const clients = await ClientModel.find();
      return res.json(clients);
  } catch (err) {
      return next(err);
  }
}


async function isVerified(req, res, next) {
  const { id } = req.params;
  const { pincode } = req.body;
  try {
    const client = await ClientModel.findById(id);
      const { verification_code, verification_status } = client;
      if (verification_status === false && pincode !== verification_code) {
        res.status(400).send("Verification code is invalid")
      } else if (verification_status === false){
        const result = pincode === verification_code ? !verification_status : verification_status
        client.verification_status = result;
        res.status(200).send("Client has successfully been verified")
      } else {
        res.status(200).send("Client is already verified")
      }
      
      await client.save();
  } catch (err) {
    return next(err);
  }
}


// Handler to handle retrieving information for a single client
async function show(req, res, next) {
  try {
    // Destructure id from request parameters
    const { id } = req.params;
    // Retrieve client information with this id
    const client = await ClientModel.findById(id);
    return res.json(client);
  } catch (err) {
      return next (err);
  }
}

// Handler to handle any changes made to clients in database.  PATCH equivalent
async function update(req, res, next) {
  console.log(req.body);
  try {
    // Find user in database by id (req.params.id), pass in the changes(req.body), and return the new document (new: true)
    const client = await ClientModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(client); 
  } catch (err) {
    return next(err)
  }
}


// Handler to handle user requests to delete client from database
async function destroy(req, res, next) {
  try {
    // Find client with this id (req.params.id) and remove from database
    const client = await ClientModel.findByIdAndRemove(req.params.id);
    return res.json(client);
  } catch (err) {
    return next(err)
  }
}


module.exports = {
  create,
  index,
  isVerified,
  update,
  destroy,
  show,
  // showMessage
}