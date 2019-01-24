const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
// const passport = require("passport");
const ClientController = require("../controllers/client_controller");

router.get("/", ClientController.index);

router.get("/:id", ClientController.showClient);
router.post("/", ClientController.create);
router.patch("/:id", ClientController.patch);

module.exports = router;
