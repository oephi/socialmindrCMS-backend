const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("./config/passport");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 600000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(express.json());
app.use(express.urlencoded());

app.use(passport.initialize());

// app.get('/', (req, res) => res.send('Welcome to Socialmindr CMS!'));


// const corsOptions = {
//   origin: process.env.CORS_URI,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.get('/clients', cors(corsOptions), function (req, res, next) {
//   res.json({msg: `This is CORS-enabled for only ${process.env.CORS_URI}.`})
// })
app.use(routes);

module.exports = app;

