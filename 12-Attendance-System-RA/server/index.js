const express = require("express");
const app = express();

app.get("/", (_, res) => {
  const obj = {
    name: "Abul",
    email: "abul@gmail.com",
  };
  res.json(obj);
});

app.listen(5000, () => {
  console.log("I am listening on port 5000");
});