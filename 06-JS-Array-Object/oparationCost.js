const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i,
  }
  arr.push(o);
  arrToObj[i] = o;
};

console.time("find");
const index = arr.findIndex((item) => item.id === 4000000);
arr.splice(index, 1);
console.timeEnd("find");

console.time("obj");
delete arrToObj[4000000];
console.timeEnd("obj");