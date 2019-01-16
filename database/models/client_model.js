const mongoose = require('mongoose');
const ClientSchema = require('../schema/client_schema');

const ClientModel = mongoose.model('Client', ClientSchema);

module.exports = ClientModel;
