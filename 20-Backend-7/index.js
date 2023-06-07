const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "minimum 3 chars"],
    maxlength: [10, "maximum 10 chars"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "minimum 3 chars"],
    maxlength: [10, "maximum 10 chars"],
  },
  email: {
    type: String,
    required: true,
    minlength: [3, "minimum 3 chars"],
    maxlength: [10, "maximum 10 chars"],
    validate: {
      validator: function (v) {
        return v.endsWith(".com");
      },
      message: props => `invalid email format`
    },
  },
  age: Number,
  bio: String,
  single: Boolean
})

const Person = mongoose.model("Person", personSchema);

mongoose.connect('mongodb+srv://doctor_practice:28LWDslaloONGvzu@cluster0.aee2j.mongodb.net/?retryWrites=true&w=majority').then(async () => {
  console.log("Database Connected");
  const person = new Person({
    firstName: "Ab",
    // lastName: "Babul",
    // email: "abul@gmail.com",
    // age: 23,
    // bio: "I am a backend developer",
    // single: true,
  });
  await person.save();
  console.log("Person created");
  console.log(person);

  // const people = await Person.find();
  // console.log(people);
}).catch((e) => {
  console.log(e)
}).finally(() => {
  mongoose.connection.close();
})