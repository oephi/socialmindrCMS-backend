// Configuration for Mongo Database setup

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

module.exports = mongoose;