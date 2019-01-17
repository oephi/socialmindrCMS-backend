require('dotenv').config();
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Welcome to Socialmindr CMS!'));

app.use(routes);

module.exports = app;