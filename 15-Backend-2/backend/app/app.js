require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(
  [
    morgan("dev"),
    cors(),
    express.json(),
  ]
);

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

module.exports = app;