const express = require("express");
const router = express.Router();
const InviteController = require("../controllers/invite_controller");

router.get("/:id", InviteController.show);

module.exports = router;
