const express = require("express");
const router = express.Router();
const clientRoutes = require("./client_routes");
const authRoutes = require("./auth_routes")
const passport = require("passport");


router.use("/", authRoutes);
router.use("/clients", passport.authenticate("jwt", { session: false }), clientRoutes);
// router.use("/clients", clientRoutes);

module.exports = router;



