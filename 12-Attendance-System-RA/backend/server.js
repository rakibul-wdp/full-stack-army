const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

connectDB("mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Database Connected");
  app.listen(5000, () => {
    console.log("I am listening on port 5000");
  })
}).catch((e) => console.log(e));