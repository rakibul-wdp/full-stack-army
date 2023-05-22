const { default: axios } = require("axios");

const USERs_URL = `https://jsonplaceholder.typicode.com/users`;
const POSTs_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTs_URL = `https://jsonplaceholder.typicode.com/comments`;

async function getUsers() {
  const { data: users } = await axios.get(USERs_URL);
  return users;
}

async function* getPostsByUser(users) {
  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${POSTs_URL}?userId=${users[i].id}`);
    yield posts;
  }
}

getUsers().then(async (users) => {
  const userIterator = await getPostsByUser(users);
  await userIterator.next();
  await userIterator.next();
  console.log((await userIterator.next()).value);
}).catch(e => {
  console.log(e)
})