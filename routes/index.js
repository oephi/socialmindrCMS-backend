const express = require("express");
const router = express.Router();
const clientRoutes = require("./client_routes");
// const filterRoutes = reqiure("./filter_routes");

router.use("/clients", clientRoutes);
// router.use("/filter", filterRoutes)

module.exports = router

