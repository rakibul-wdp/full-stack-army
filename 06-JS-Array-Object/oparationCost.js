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
arr.unshift({
  id: 5000000,
  value: 5000000,
})
console.timeEnd("find");

console.time("obj");
arrToObj[5000000] = {
  id: 5000000,
  value: 5000000,
}
console.timeEnd("obj");