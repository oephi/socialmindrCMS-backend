const express = require("express");
const router = express.Router();
const LogController = require("../controllers/log_controller");

router.get("/:id", LogController.show);
router.post("/:id", LogController.create)

module.exports = router;
