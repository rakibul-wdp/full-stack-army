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
  },
  {
    args: [10, 20],
    params: ["a", "b"],
    body: `console.log("Hello World"); console.log("No Parameter, No ARGS");`
  },
  {
    args: [5],
    params: ["n"],
    body: `
    for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j < n; j++) {
        line += "* ";
      }
      console.log(line);
    }
    `
  }
]

operations.forEach((operation) => {
  const fn = new Function(...operation.params, operation.body);
  fn(...operation.args);
})