const express = require("express");
const router = express.Router();
const InviteCleanerController = require("../controllers/invite_cleaner_controller");

router.get("/:id", InviteCleanerController.show);

module.exports = router;
