// map, filter, reduce

const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];

/**
 * Map -> [same length as the original array]
 * Filter -> [with filtered item]
 * Reduce -> Know one knows (only you know) all possible value
 */

// we want this -> "1234falseNaN56"
const result = numbers.reduce((acc, cur, index) => {
  if (index === 0) acc += "[";
  if (cur) {
    acc += cur.toString() + (index < numbers.length - 1 ? ", " : "");
  }
  if (index === numbers.length - 1) acc += "]";
  return acc;
}, "");

console.log(result);