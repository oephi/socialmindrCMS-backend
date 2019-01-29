const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
// const passport = require("passport");
const ClientController = require("../controllers/client_controller");

router.get("/", ClientController.showClients);

router.get("/:id", ClientController.showClient);
router.post("/", ClientController.createClient);
router.patch("/:id", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);

module.exports = router;
