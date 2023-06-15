const express = require("express");
const connectDB = require("./db");
const authenticate = require("./middleware/authenticate");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

app.get("/private", authenticate, async (req, res) => {
  console.log("I am the user", req.user);
  return res.status(200).json({ message: "I am a private route" });
})

app.get("/public", (req, res) => {
  return res.status(200).json({ message: "I am a public route" });
})

app.get("/", (_, res) => {
  const obj = {
    name: "Abul",
    email: "abul@gmail.com",
  };
  res.json(obj);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status ? err.status : 500).json({ message: "Server Error Occurred" })
});

connectDB("mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Database Connected");
  app.listen(5000, () => {
    console.log("I am listening on port 5000");
  });
}).catch((e) => console.log(e));