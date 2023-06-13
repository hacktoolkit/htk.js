#!/usr/bin/env node

"use strict";

import express from "express";

import { DEBUG_PORT } from "./config.js";

const app = express();
app.use(express.json());

const Counter = {
  count: 0,
};

app.post("/", function (req, res) {
  ++Counter.count;
  const now = new Date();

  console.log(`>>>>>>>>>> HTK DEBUG ${Counter.count} ${now} >>>>>>>>>>`);
  console.log(req.body.text);
  console.log(`<<<<<<<<<< HTK DEBUG ${Counter.count} ${now} <<<<<<<<<<`);
  res.send("OK");
});

app.listen(DEBUG_PORT);
console.log(
  `Localhost debug Express web server started on port ${DEBUG_PORT}.`
);
