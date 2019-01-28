const express = require("express");
const router = express.Router();
const passport = require("passport");
const cors = require("cors");
const corsConfig = require("../config/corsConfig")
const clientRoutes = require("./client_routes");
const authRoutes = require("./auth_routes")
const inviteCleanerRoutes = require("./invite_cleaner_routes");
const invitesRoutes = require("./invites_routes");
const logsRoutes = require("./logs_routes");
const messageRoutes = require("./message_routes");


router.use("/", authRoutes);
router.use("/clients", cors(corsConfig.corsOptions), clientRoutes);
// router.use("/clients", passport.authenticate("jwt", { session: false }), clientRoutes);
// router.use("/cleaner", passport.authenticate("jwt", { session: false }), inviteCleanerRoutes)
// router.use("/invites", passport.authenticate("jwt", { session: false }), invitesRoutes)
// router.use("/logs", passport.authenticate("jwt", { session: false }), logsRoutes)
// router.use("/message", passport.authenticate("jwt", { session: false }), messageRoutes)

module.exports = router;



