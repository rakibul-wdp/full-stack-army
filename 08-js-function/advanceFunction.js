function sum(a, b) {
  return a + b;
}

// G(a, b)
function sub(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

const a = 10;
const b = 20;

const r = Math.abs(times(sum(a, b), sub(a, b)));
console.log(r);

// Match.abs(n) -> F
F(G(10, 20))