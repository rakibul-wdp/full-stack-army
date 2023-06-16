const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority", { serverSelectionTimeoutMS: 1000 }).then(async () => {
  console.log("Database Connected");
  await createUser({ name: "Cabul", email: "cabul@gmail.com" });
  await createUser({ name: "dabul", email: "dabul@gmail.com" });
  mongoose.connection.close();
}).catch((e) => {
  console.log(e);
});

const Schema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", Schema);

async function createUser(data) {
  const user = new User({ ...data });
  await user.save();
  return user;
}