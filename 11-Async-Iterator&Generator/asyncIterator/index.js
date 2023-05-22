const { default: axios } = require("axios");

const USERs_URL = `https://jsonplaceholder.typicode.com/users`;
const POSTs_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTs_URL = `https://jsonplaceholder.typicode.com/comments`;

async function getUsers() {
  const { data: users } = await axios.get(USERs_URL);
  return users.map((user) => axios.get(`${POSTs_URL}?userId=${user.id}`));
}

// async function* getPostsByUser(users) {
//   for (let i = 0; i < users.length; i++) {
//     const { data: posts } = await axios.get(`${POSTs_URL}?userId=${users[i].id}`);
//     yield posts;
//   }
// }

(async () => {
  const users = await getUsers();
  for await (let v of users) {
    console.log(v.data.map(post => post.title));
  }
})();

// getUsers().then(async (users) => {
//   // const userIterator = await getPostsByUser(users);
//   // await userIterator.next();
//   // await userIterator.next();
//   // console.log((await userIterator.next()).value);

//   // for await (let v of getPostsByUser(users)) {
//   //   console.log(v.map(d => d.title));
//   // }
//   console.log(users);
// }).catch(e => {
//   console.log(e)
// })