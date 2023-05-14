function nameOfTheFunction(/** input something */) {
  // function body
  // you can write any valid js code here

  // return a result
}

// There are two steps
// - Define a function
// - Invoke a function

function testFunction(a, b) {
  const result = a + b + Math.max(a, b);
  // console.log(result);
}

testFunction(10, 20);

function jobholderLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  walk(name, "office");
  work(name);
  eat(name, "Lunch");
  walk(name, "home");
  eat(name, "dinner");
  sleep(name);
}

function sleep(name) {
  console.log(`${name} is sleeping`);
}

function awake(name) {
  console.log(`${name} is awake`);
}

function eat(name, time) {
  console.log(`${name} is taking ${time}`);
}

function walk(name, destination) {
  console.log(`${name} is walking to ${destination}`);
}

function study(name) {
  console.log(`${name} is studying`);
}

function work(name) {
  console.log(`${name} is working`);
}