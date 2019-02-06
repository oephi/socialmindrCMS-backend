const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const ClientController = require("../controllers/client_controller");

router.get("/", ClientController.index);

router.get("/:id", ClientController.show);

router.post("/", celebrate({
  body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
  }
}), ClientController.create);

router.post("/verification/:id", ClientController.isVerified);

router.patch("/:id", ClientController.update);

router.delete("/:id", ClientController.destroy);


module.exports = router;
