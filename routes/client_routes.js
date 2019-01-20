const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const passport = require("passport");
const ClientController = require("../controllers/client_controller");

router.get("/", passport.authenticate("jwt", {session: false}), ClientController.index);

router.get("/:id", ClientController.show);
router.post("/", ClientController.create);

module.exports = router;
