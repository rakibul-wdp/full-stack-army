// pure function
function sum(a, b) {
  return a + b;
}

sum(10, 20); // 30

// // side effect
// let limit = 100;
// function changeLimit() {
//   limit = 500;
// }

// changeLimit(limit);
// console.log(limit);

// pure function
const arr = [1, 2, 3];
function add(arr, data) {
  arr.push(data);
}

// impure function
const arr2 = [1, 2, 3];
function add(data) {
  arr.push(data);
}

// impure function
function log(msg) {
  console.log(msg);
}