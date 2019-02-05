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


router.use("/",  authRoutes);
router.use("/clients",  passport.authenticate("jwt", { session: false }), clientRoutes);
router.use("/invite_cleaner", passport.authenticate("jwt", { session: false }), cors(corsConfig.corsOptions), inviteCleanerRoutes);
router.use("/invite", passport.authenticate("jwt", { session: false }), cors(corsConfig.corsOptions), inviteRoutes);
router.use("/log", passport.authenticate("jwt", { session: false }), cors(corsConfig.corsOptions), logRoutes);
router.use("/message", passport.authenticate("jwt", { session: false }), cors(corsConfig.corsOptions), messageRoutes);

module.exports = router;



