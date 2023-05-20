/**
 * higher order function
 * - function can be passed as an argument
 * - function can be return from another function
 */

/**
 * hidden concepts
 * - scope
 * - closure
 * - execution context
 * - hoisting
 */

function generateTwoRandNumber(max, cb) {
  const random1 = Math.floor(Math.random() * max); // const
  const random2 = Math.floor(Math.random() * max); // const

  const result = cb(random1, random2);
  return result;
}

generateTwoRandNumber(100, (rand1, rand2) => {
  // console.log(rand1, rand2);
});

// console.log(generateTwoRandNumber(1000, (rand1, rand2) => rand1 + rand2));
// console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 - rand2));
// console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand2));
// console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand1 + rand2 * rand2));

// function randomSum(max) {
//   const random1 = Math.floor(Math.random() * max);
//   const random2 = Math.floor(Math.random() * max);

//   return random1 + random2; // placeholder
// }

// function randomSub(max) {
//   const random1 = Math.floor(Math.random() * max);
//   const random2 = Math.floor(Math.random() * max);

//   return random1 - random2; // placeholder
// }

// function randomSqrSum(max) {
//   const random1 = Math.floor(Math.random() * max);
//   const random2 = Math.floor(Math.random() * max);

//   return random1 * random1 + random2 * random2; // placeholder
// }

// function sqr(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
    return result;
  }
}

const sqr = power(2);
const cube = power(3);
const power8 = power(8);

// console.log("SQR", sqr);
// console.log("Cube", cube);
// console.log("Power 8", power8);

// console.log(power8(3));
// console.log(sqr(4));
// console.log(sqr(5));

// lexing / parsing / tokenize -> compile -> run

// global
// local
// block scope

const a = 10;
function mostOuter() {
  function outer() {
    // console.log(a);
  }
}

{
  {
    {

    }
  }
}

// console.log(notScoped);

function A() {
  console.log("I am A")
}
function B() {
  A()
}
function C() {
  B()
  B()
}
function D() {
  C()
  A()
}

D();