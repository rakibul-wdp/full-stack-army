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

const operations = [
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a + b =', a + b)"
  },
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a - b =', a - b)"
  },
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a * b =', a * b)"
  }
]

operations.forEach((operation) => {
  const fn = new Function(...operation.params, operation.body);
  fn(...operation.args);
})