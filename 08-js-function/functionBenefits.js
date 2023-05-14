// Prove -> Function is a value
function testFunction() {
  console.log("I am a test function");
}

const fn = testFunction;
console.log(fn())
fn();

const ar = [fn, testFunction];
const o = {
  fn: testFunction
}

function returnFn() {
  return testFunction;
}