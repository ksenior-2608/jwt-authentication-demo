require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app =express();

app.use(express.json());
app.listen(3000);

var posts = [
    {
        author: "Ashish",
        title: "Story",
    },
    {
        author: "Kyle",
        title: "Article",
    }
]

app.get("/posts",function(req,res){
    res.send(posts.json());
});

app.post("/login",function(req,res){
    //authenticate
    let userName = req.body.username;
    let user = {
        username: userName,
    }
    let accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    res.send({
        accessToken : accessToken,
    });
});