const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const ClientController = require("../controllers/client_controller");

router.get("/", ClientController.index)
// router.get("/customers", CustomerController.index)

module.exports = router;
