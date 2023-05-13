/*
const axios = require("axios").default
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const { data } = await axios.get(url);
  // const result = data.slice(0, 10).map((item) => {
  //   return {
  //     userId: item.userId,
  //     id: item.id,
  //     title: item.title,
  //   };
  // });
  const result = data.slice(0, 10).reduce((acc, cur) => {
    acc[cur.id] = { ...cur };
    delete acc[cur.id].body;
    return acc;
  }, {});
  return result;
};

getData().then((data) => console.log(data)).catch((e) => console.log(e));

*/


const names = [
  "Agraham",
  "Leanne",
  "Howell",
  "Ervin",
  "Bauch",
  "Clementine",
  "Lebsack",
  "Patricia",
  "Dietrich",
  "Chelsey",
  "Dennis Schulist",
  "Mrs",
  "Weissnat",
  "Kurtis",
  "Runolfsdottir V",
  "Nicholas",
  "Reichert",
  "Glenna",
  "DuBuque",
  "Clementina",
];

// const namesGroup = {
//   A: [],
//   B: [],
//   C: []
// }

const namesGrouped = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acc) {
    acc[firstLetter].push(cur);
  } else {
    acc[firstLetter] = [cur];
  }
  return acc;
}, {});

Object.keys(namesGrouped).forEach((groupKey) => {
  console.log("-------------", groupKey, "-------------");
  namesGrouped[groupKey].forEach((name) => console.log(name));
  console.log("")
})