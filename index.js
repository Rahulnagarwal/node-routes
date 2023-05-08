const express = require("express");
const fs = require("fs");
const { connectMongoDb } = require('./connection');

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;


connectMongoDb('mongodb://127.0.0.1:27017/rahul-api');
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Started"))