const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const ClientController = require("../controllers/client_controller");

router.get("/", ClientController.index)
router.get("/:id", ClientController.show)
// router.get("/customers", CustomerController.index)

module.exports = router;
