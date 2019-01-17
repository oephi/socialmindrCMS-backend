require('dotenv').config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(session({
  secret:
}))

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Welcome to Socialmindr CMS!'));

app.use(routes);

module.exports = app;
