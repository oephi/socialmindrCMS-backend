const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/message_controller");

router.get("/:id", MessageController.show);

module.exports = router;
