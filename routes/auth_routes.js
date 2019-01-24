const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const AuthController = require("./../controllers/auth_controller");

router.get("/register", AuthController.make);

router.post("/register", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), AuthController.register);

router.get("/login", AuthController.loginForm)

router.post("/login", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), AuthController.login);

router.get("/logout", AuthController.logout);

module.exports = router;

