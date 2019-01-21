const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");

function make(req, res) {
  res.render("authentication/make")  
}

async function register(req, res, next) {
    const { email, password } = req.body;

    
    UserModel.register({ email }, password, function(err, user) {
      if (err) { 
        return next(err) 
      }
      
      const token = JWTService.createJWT(user._id);
      res.redirect("/login");
      res.json(token);
    });
  }
  
  function loginForm(req, res) {
    res.render("authentication/login_form")
  }
  
  async function login(req, res, next) {
    const { email, password } = req.body;
    try {
      const { user, error } = await UserModel.authenticate()(email, password);
      if (error) throw error;
      const token = JWTService.createJWT(user._id);
      req.session.user = user;
        res.redirect("/clients");
        res.json(token);
    } catch (error) {
        return next(error);
    }

}

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