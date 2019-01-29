const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");


// Render register form, will be made obselete by React register form
function make(req, res) {
  res.render("authentication/make")  
}

// Logic for creating a new user
async function register(req, res, next) {
  //Destructuring the email and password values out of the request body  
  const { email, password } = req.body;

    // Using the password and email, checking for errors and then assigning current user with a JWT token
    UserModel.register({ email }, password, function(err, user) {
      if (err) { 
        return next(err) 
      }
      
      const token = JWTService.createJWT(user._id);
      res.redirect("/login");
      res.json(token);
    });
  }
  
  // Render a login form, will be made obselete by React register form
  function loginForm(req, res) {
    res.render("authentication/login_form")
  }
  
  // Logic for logging in a user
  async function login(req, res, next) {
    // Desctructuring the email and password values out of the request body
    const { email, password } = req.body;
    try {
      // Checking for registered user
      const { user, error } = await UserModel.authenticate()(email, password);
      if (error) throw error;
      const token = JWTService.createJWT(user._id);
      //Assign a session to the user if user exists
      req.session.user = user;
        res.redirect("/clients");
        res.json(token);
    } catch (error) {
        return next(error);
    }

}

//Logic to log out of current session
function logout(req, res) {
  req.logout();
  res.cookie("jwt", null, { maxAge: -1 });
  res.redirect("/");
}

module.exports = {
    make,  
    register,
    login,
    loginForm,
    logout
}