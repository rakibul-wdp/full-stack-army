const greetFn = new Function(
  "name",
  "email",
  `
    const fName = name.split(" ")[0];
    console.log("Hello, ", fName, "Is that your email?", email);
    console.log("Yeah, this is mine");
    return fName;
  `
);

console.log(typeof greetFn);
// console.log(greetFn.toString());
const fName = greetFn("Abul Babul", "abulbabul@gmail.com");
console.log("First Name", fName);