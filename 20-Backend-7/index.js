const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  bio: String,
  single: Boolean
})

const Person = mongoose.model("Person", personSchema);

mongoose.connect('mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority').then(async () => {
  console.log("Database Connected");
  const person = new Person({
    firstName: "Abul",
    lastName: "Babul",
    email: "abul@gmail.com",
    age: 23,
    bio: "I am a backend developer",
    single: true,
  });
  await person.save();
  console.log("Person created");
  console.log(person);
}).catch((e) => {
  console.log(e)
}).finally(() => {
  mongoose.connection.close();
})