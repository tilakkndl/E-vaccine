const express = require('express');

const router = express.Router();

const {register, getAllRegisters  } = require("../controllers/registerController")

router.route("/register").post(register).get(getAllRegisters);

module.exports = router;