const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

const simpleLogger = (req, res, next) => {
  console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);
  const name = req.query.name
  if (name === "Abul") {
    return res.json({ message: "Bad Request" });
  }
  next();
}

const secondMiddleware = (req, res, next) => {
  console.log("I am second middleware");
  next();
}

app.use([simpleLogger, secondMiddleware]);

app.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
})

app.listen(5000, () => {
  console.log("application is listening on port 5000");
});