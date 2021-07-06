const express = require("express");
const jwt = require("jsonwebtoken");
const config = require('config');
module.exports = function authenticate(req, res, next) {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        res.sendStatus(401);
    }
    let secret = config.get('dbConfig.ACCESS_TOKEN_SECRET');
    jwt.verify(token, secret, function (err, user) {
        
        if (err) {
            res.sendStatus(403);
        } else {
            req.user = user;
            next();
        }
    });
}

