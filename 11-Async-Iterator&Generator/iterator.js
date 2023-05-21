// 1, 2, 3, 4

const arr = [1, 2, 3, 4];

let index = 0;
function next() {
  return arr[index++];
}

console.log(next());

for (let i = 0; i < 10; i++) {
  console.log("Hello World");
}

console.log(next());