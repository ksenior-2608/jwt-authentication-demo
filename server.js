require("dotenv").config();
const { json } = require("express");
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

app.get("/posts",authenticate,function(req,res){
    let user = req.user;
    // console.log(user);
    let userPosts =[];
    posts.forEach(function(post){
        if(post.author == user.username){
            userPosts.push(post);
        }
    }) 
    // console.log(userPosts);
    res.json(userPosts);
});

function authenticate(req,res,next){
    let authHeader = req.headers["authorization"];
    let token=authHeader && authHeader.split(" ")[1];
    if(!token){
        res.sendStatus(401);
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,function(err,user){
        if(err){
            res.sendStatus(403);
        }else{
            req.user = user;
            next();
        }
    });
}

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