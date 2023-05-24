const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("<h1 style='color: red'>Hello, It's a heading</h1>");
});

app.listen(5000, () => {
  console.log("I am listening on port 5000");
});