for (let i = 1; i <= 50; i++) {
  // it's a new js file.
  // we can write any valid js code here
  // every code written inside this block will execute multiple times
  // console.log("Abul")
}

// there are total three types of loop available in js
// 1. for (when we know the range)
// 1.1 Range
// 1.2 for in
// 1.3 for of
// 2. while (when we don't know the range)
// 3. do while *

while (true) {
  let num = Math.ceil(Math.random() * 100);
  // console.log("Babul", num);
  if (num === 99) break;
}

do {
  // console.log("it will run at least once");
} while (false);