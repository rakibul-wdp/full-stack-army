const express = require("express");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  /**
   * Request Input Sources:
   * req Body
   * req Param
   * req Query
   * req Header
   * req Cookies
   */
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exist" });
  }

  user = new User({ name, email, password });
  await user.save();

  return res.status(201).json({ message: "User created successfully", user });
});

app.get("/", (_, res) => {
  const obj = {
    name: "Abul",
    email: "abul@gmail.com",
  };
  res.json(obj);
});

connectDB("mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Database Connected");
  app.listen(5000, () => {
    console.log("I am listening on port 5000");
  });
}).catch((e) => console.log(e));