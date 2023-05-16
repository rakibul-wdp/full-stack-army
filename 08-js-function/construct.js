// let's construct a function
const fn = new Function("str", `let obj = {};
for (let s of str) {
  if (s !== " ") {
    obj[s] = s;
  }
}
return obj;`);

console.log(fn("Abul Babul"));

const fData = {
  params: ["a", "b"],
  body: [
    "const r = a + b",
    "return r"
  ]
}

const fBody = fData.body.reduce((acc, cur) => {
  acc += cur + ";"
  return acc;
}, "");

const tf = new Function(...fData.params, fBody);
console.log(tf(100, 200));