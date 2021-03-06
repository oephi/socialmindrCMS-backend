const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const routes = require('./routes');
const passport = require('./config/passport');
const cors = require('cors');


app.use(
	session({
		secret            : process.env.SESSION_SECRET,
		resave            : false,
		saveUninitialized : true,
		cookie            : {
			expires : 600000
		},
		store             : new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

app.use(
	cors({
		// origin : process.env.CORS_URI
	})
);

app.use(express.json());
app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

module.exports = app;
