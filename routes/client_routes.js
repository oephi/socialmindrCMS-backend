const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const ClientController = require("../controllers/client_controller");

// router.post("/customer", CustomerController.create)
// router.get("/customers", CustomerController.index)

module.exports = router;
