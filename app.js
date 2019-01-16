require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Welcome to Socialmindr CMS!'));

app.use(routes);

module.exports = app;
