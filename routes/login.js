const express = require("express");
const jwt = require("jsonwebtoken");
var router = express.Router();
const config = require('config');
router.post("/", function (req, res) {
    //authenticate
    let userName = req.body.username;
    let user = {
        username: userName,
    }
    let secret = config.get('dbConfig.ACCESS_TOKEN_SECRET');
    let accessToken = jwt.sign(user, secret);
    res.send({
        accessToken: accessToken,
    });
});

module.exports = router;