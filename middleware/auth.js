const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = function authenticate(req, res, next) {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err) {
            res.sendStatus(403);
        } else {
            req.user = user;
            next();
        }
    });
}

