const express = require("express");
const router = express.Router();
const authController = require("./../controllers/testreact.controller");

router.post("/rtestreact", authController.register);
router.post("/login", authController.login);

module.exports = router;