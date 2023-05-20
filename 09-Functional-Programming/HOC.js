/**
 * higher order function
 * - function can be passed as an argument
 * - function can be return from another function
 */

/**
 * hidden concepts
 * - scope
 * - closure
 * - function context
 * - hoisting
 */

function generateTwoRandNumber(max, cb) {
  const random1 = Math.floor(Math.random() * max); // const
  const random2 = Math.floor(Math.random() * max); // const

  const result = cb(random1, random2);
  return result;
}

generateTwoRandNumber(100, (rand1, rand2) => {
  console.log(rand1, rand2);
});

console.log(generateTwoRandNumber(1000, (rand1, rand2) => rand1 + rand2));
console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 - rand2));
console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand2));
console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand1 + rand2 * rand2));

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