function* myGenerator() {
  yield 1
  yield 2
  yield 3
}

const iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* range(start = 0, stop = 100, step = 5) {
  for (let i = start; i <= stop; i += step) {
    yield i
  }
}

const rangeIt = range(1, 10, 3);
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());

for (let v of range()) {
  console.log(v);
}