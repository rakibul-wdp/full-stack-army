const { default: axios } = require("axios");

const USERs_URL = `https://jsonplaceholder.typicode.com/users`;
const POSTs_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTs_URL = `https://jsonplaceholder.typicode.com/comments`;

// username = Bret;

async function getComments(username) {
  try {
    const { data: user } = await axios.get(`${USERs_URL}?username=${username}`);
    const { data: posts } = await axios.get(`${POSTs_URL}?userId=${user[0].id}`);
    const { data: comments } = await axios.get(`${COMMENTs_URL}?postId=${posts[0].id}`);
    const { data: userWithComment } = await axios.get(`${USERs_URL}?email=${comments[0].email}`);

    console.log(userWithComment);
  } catch (error) {
    console.log(error.toJSON());
  }
}

getComments("Bret");