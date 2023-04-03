const numbers = [1, 2, 5, 9, 82, 92]

// let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  // sum += numbers[i];
}
// console.log(sum)

const cb = () => {
  // console.log("Hello");
};
numbers.forEach(function (value) {
  if (value % 2 === 0) {
    // console.log(value);
  }
});

let sum = 0;
numbers.forEach(function (v, i) {
  if (i <= 3) {
    sum += v;
  }
});
console.log(sum)