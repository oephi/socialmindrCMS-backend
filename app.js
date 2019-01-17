require('dotenv').config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("error-handler")
const cookieParser = require("cookie-parser");

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 600000
  }
}));

app.use(cors());


app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(morgan("combined"));

// Models and Routes
require('./database/models/User');
require('./config/passport');

app.get('/', (req, res) => res.send('Welcome to Socialmindr CMS!'));

app.use(routes);

module.exports = app;
