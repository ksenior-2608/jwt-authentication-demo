require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.listen(3000);

posts = [
    {
        author: "Ashish",
        title: "Story",
    },
    {
        author: "Kyle",
        title: "Article",
    }
];

const loginRoute = require("./routes/login");
const getPostRoute = require("./routes/post");

app.use("/login", loginRoute);
app.use("/posts", getPostRoute);




