import express from 'express';
import consign from "consign";

const app = express();

// var a = require("./models/tasks")

consign()
.include("models")
.then("/libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);



