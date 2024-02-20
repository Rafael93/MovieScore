const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user.controller");

router.post("", userControllers.createUser);
router.post("/session", userControllers.login);
router.delete("/session", userControllers.logout);

module.exports = router;
