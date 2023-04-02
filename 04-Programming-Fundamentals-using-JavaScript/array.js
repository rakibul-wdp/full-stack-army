const name1 = "Abul";
const name2 = "Babul";
const name3 = "Cabul";
const name4 = "Dabul";
const name5 = "Ebul";

const students = ["Abul", "Babul", "Cabul", "Dabul", "Ebul", "Fabul"];

for (let i = 0; i < students.length; i++) {
  // console.log(students[i].toLowerCase())
}

// name1.sendEmail();
// name2.sendEmail();
// name3.sendEmail();

// if plural then array 

const numbers = [1, 2, 3, 4, 5];
const bools = [true, false, true, false];
const nulls = [null, null, null];
const us = [undefined, undefined];
const arrayOfArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const mixed = [true, null, "string", 2, 3, [3, 2, 5]]

// CRUD

// store attributes using array
const student1 = { firstName: "Arnob", secondName: "Khan", email: "arnob@gmail.com", age: 25, attend: true };

const student2 = { firstName: "Bornob", secondName: "Khan", email: "bornob@gmail.com", age: 25, attend: true };

const student3 = { firstName: "Cornob", secondName: "Khan", email: "cornob@gmail.com", age: 25, attend: true };

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
  // sendEmail(allStudents[i].email);
  // console.log("Sending email to", allStudents[i].email);
}

function sendEmail(email) {
  // console.log("Sending email to", email);
}

allStudents.forEach((item) => console.log("Email", item.email));
allStudents.forEach((item) => {
  // console.log("FullName: ", item.firstName, item.secondName)
})

function nameOfFunction(name) {
  if (!name) {
    console.log("please provide your name");
  } else {
    console.log("hello", name);
  }
}

// nameOfFunction("Omok");
// nameOfFunction();
// nameOfFunction("Tomok");

function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * min + (max - min));
  return randomNumber;
}

console.log(generateRandomNumber(5, 10));