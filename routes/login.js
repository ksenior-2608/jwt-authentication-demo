const express = require("express");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.post("/", function (req, res) {
    //authenticate
    let userName = req.body.username;
    let user = {
        username: userName,
    }
    let accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.send({
        accessToken: accessToken,
    });
});

module.exports = router;