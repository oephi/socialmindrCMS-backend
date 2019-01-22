const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/client_controller");

router.get("/:id", ClientController.showCleaner);

module.exports = router;
