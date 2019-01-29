const express = require("express");
const router = express.Router();
const passport = require("passport");
const cors = require("cors");
const corsConfig = require("../config/corsConfig")
const clientRoutes = require("./client_routes");
const authRoutes = require("./auth_routes")
const inviteCleanerRoutes = require("./invite_cleaner_routes");
const inviteRoutes = require("./invite_routes");
const logRoutes = require("./log_routes");
const messageRoutes = require("./message_routes");


router.use("/", authRoutes);
router.use("/clients", cors(corsConfig.corsOptions), clientRoutes);
router.use("/invite_cleaner", cors(corsConfig.corsOptions), inviteCleanerRoutes);
router.use("/invite", cors(corsConfig.corsOptions), inviteRoutes);
router.use("/log", cors(corsConfig.corsOptions), logRoutes);
router.use("/message", cors(corsConfig.corsOptions), messageRoutes);

module.exports = router;



