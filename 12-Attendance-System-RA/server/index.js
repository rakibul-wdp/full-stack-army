const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const connectDB = require("./db");
const User = require("./models/User");
const authenticate = require("./middleware/authenticate");

const app = express();
app.use(express.json());

app.post("/register", async (req, res, next) => {
  /**
   * Request Input Sources:
   * req Body
   * req Param
   * req Query
   * req Header
   * req Cookies
   */
  const { name, email, password, accountStatus } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    user = new User({ name, email, password, accountStatus });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;

    await user.save();
    return res.status(201).json({ message: "User created successfully", user });
  } catch (e) {
    next(e);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    delete user._doc.password;

    const token = jwt.sign(user._doc, 'secret-key', { expiresIn: "2h" });

    return res.status(200).json({ message: "Login Successful", token });
  } catch (e) {
    next(e);
  }
})

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
  res.status(500).json({ message: "Server Error Occurred" })
});

connectDB("mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Database Connected");
  app.listen(5000, () => {
    console.log("I am listening on port 5000");
  });
}).catch((e) => console.log(e));