const axios = require('axios');
const UserModel = require('./../database/models/user_model');
const JWTService = require('./../services/jwt_service');

// Logic for creating a new user
async function register(req, res, next) {
	console.log('in the register backend ------- ');
	//Destructuring the email and password values out of the request body
	const { email, password } = req.body;

	// Using the password and email, checking for errors and then assigning current user with a JWT token
	UserModel.register({ email }, password, function(err, user) {
		if (err) {
			return next(err);
		}

		const token = JWTService.createJWT(user._id);
		return res.json({ token });
	});
}

// Logic for logging in a user
async function login(req, res, next) {
	console.log('testing----');
	// Desctructuring the email and password values out of the request body
	const { email, password } = req.body;
	try {
		// Checking for registered user
		const { user, error } = await UserModel.authenticate()(email, password);
		if (error) throw error;
		const token = JWTService.createJWT(user._id);
		//Assign a session to the user if user exists
		// req.session.token = token;
		// res.redirect('/clients');
		res.json(token);
	} catch (error) {
		return next(error);
	}
}

//Logic to log out of current session
function logout(req, res) {
	req.logout();
	res.cookie('jwt', null, { maxAge: -1 });
	res.redirect('/');
}

module.exports = {
	register,
	login,
	logout,
};
