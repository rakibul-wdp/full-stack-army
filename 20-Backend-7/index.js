const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority').then(() => {
  console.log("Database Connected");
}).catch((e) => {
  console.log(e)
}).finally(() => {
  mongoose.connection.close();
})