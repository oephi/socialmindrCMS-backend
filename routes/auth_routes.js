const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const AuthController = require("../controllers/auth_controller");

router.post("/", AuthController.optional);
router.post("/login", AuthController.optional);
router.post("/current", AuthController.required);

module.exports = router;
