const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth.controller");

router.post("/register", authCtrl.Register);
router.post("/login", authCtrl.Login);

module.exports = router;
