const express = require("express");
var router = express.Router();
const authenticate = require("../middleware/auth");

router.get("/", authenticate, function (req, res) {
    let user = req.user;
    // console.log(user);
    let userPosts = [];
    posts.forEach(function (post) {
        if (post.author == user.username) {
            userPosts.push(post);
        }
    })
    // console.log(userPosts);
    res.json(userPosts);
});

module.exports = router;