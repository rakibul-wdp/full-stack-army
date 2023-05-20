// pure function
function sum(a, b) {
  return a + b;
}

sum(10, 20); // 30

// side effect
let limit = 100;
function changeLimit() {
  limit = 500;
}

changeLimit(limit);
console.log(limit);