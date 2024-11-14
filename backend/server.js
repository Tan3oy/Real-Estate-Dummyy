// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/dbConnection.js";

const port = 5000;
const app = express();

connectDB();

app.get('/', function (req, res) {
  res.send('Hello World')
})

// cors
app.use(
  cors({
    origin: "*",
  })
);

// const mongodbURI = process.env.MONGODB_URL;
// mongoose.connect(mongodbURI);

// Middlewires

app.use(express.json({ limit: "50mb" }));

//cookie parser
app.use(cookieParser());

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at port ${port} successfully`);
  connectDB();
});