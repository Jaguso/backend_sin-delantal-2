const express = require("express");
const router = express.Router();
const {signUp} = require("../controllers/users");

router.post('/users/signup', signUp)

module.exports = router;