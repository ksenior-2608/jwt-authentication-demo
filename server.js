const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const uri = config.get('dbConfig.mongoURI');


mongoose.connect(uri, { useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

console.log(mongoose.connection.readyState);
app.use(express.json());
const loginRoute = require("./routes/login");
const getPostRoute = require("./routes/post");
app.use("/login", loginRoute);
app.use("/posts", getPostRoute);
app.listen(8000, () => console.log(`Server started on port`));












 