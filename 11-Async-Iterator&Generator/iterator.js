const channel = "Abul";
const channelIterator = channel[Symbol.iterator]();
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());

for (let v of channel) {
  // console.log(v);
}

while (true) {
  const data = channelIterator.next();
  if (data.done) {
    break;
  }
  console.log(data.value);
}