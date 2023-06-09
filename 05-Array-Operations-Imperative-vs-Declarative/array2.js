// make fun of JS Array (playlist)

const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== "number") {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }

  if (arr[i] === undefined) {
    count++;
  }
}

arr.length -= count;

// console.log(arr);

// step 1: [1, 2, 3, false, 4, 5, "", "test", 6, 7, undefined]
// step 2: [1, 2, 3, 4, 5, "", "test", 6, 7]
// step 3: [1, 2, 3, 4, 5, "test", 6, 7]

// console.log(arr.filter(Boolean));

const filteredArray = arr.filter((v) => typeof v === "number");
// console.log(filteredArray);

const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    newArr.push(arr[i]);
  }
}
// console.log(newArr);

function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(55));

const arr2 = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

const index = arr2.findIndex(function (v) {
  return v.id === 4;
});
arr2[index].value = 400;
// console.log(arr2);

const obj = arr2.find(function (v) {
  return v.id === 4;
});
// console.log(obj);
// console.log(arr2);

const obj2 = arr2[2];
obj2.value = 300;
// console.log(arr2)

const a = { a: 10 },
  b = { a: 10 };
const c = a;
// console.log(a === c);

// splice -> mutable
const index2 = arr.findIndex((item) => item.id === 4);
const arr3 = arr2.splice(index, 1);
// console.log(arr3);

// filter -> immutable
const arr4 = arr2.filter((item) => item.id !== 4);
// console.log(arr2);
// console.log(arr4);

// object literal
const microphone = {
  brand: "Fifine",
  indicator: true,
  price: 8000,
  color: "Black",
  startRecording() {
    console.log("recoding started");
  },
  stopRecording: () => {
    console.log("recording stopped");
  },
  toString() {
    return this;
  }
};

Object.freeze(microphone);
microphone.newProperty = "my new property";
// console.log(microphone);

// console.log(Object.keys(microphone));
// console.log((Object.values(microphone)));

for (let k in microphone) {
  // console.log(k, microphone[k]);
}

const empty = {};
// console.log(Object.keys(empty).length === 0);
console.log(Object.entries(microphone));

/**
 * There are two different parts in Object
 * 1. Noun / Adjective (State/data/property/field)
 * 2. Verb / (functionalities -> start, stop)
 */

// constructor function
const testObj = new Object();
testObj.name = "Test Object";
testObj.time = new Date();
// console.log(testObj);
// console.log("My microphone = " + microphone);

// console.log(microphone.length);

// how to use object instead of array
// because it's boost performance and code will easy