// function main() {
//   setTimeout(() => {
//     console.log("load last")
//   }, 10)

//   setTimeout(() => {
//     console.log("load first")
//   }, 0)

//   test()
// }

// function test() {
//   console.log("test")
// }

// main();

/**
 * 1. find user by username
 * 2. find posts by userId
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the last commented user
 */

/**
 * /users?username=[username]
 * /posts?userId=[userId]
 * /comments?postsId-[postId
 * /users?username=[username]
 */

// get user data by async await
async function getUserName(username) {
  try {
    const mainUser = await get(`/users?username=${username}`);
    const posts = await get(`/posts/userId=${mainUser.id}`);
    const comments = await get(`/comments?postId=${posts[0].id}`);
    const user = await get(`/users?username=${comments[0].username}`);
    console.log(user);
  } catch (e) {
    console.log(e)
  }
}

// get user data by Promise

const get = (path) => Promise.resolve()

get(`/users?username=abul`)
  .then((user) => {
    /** do all other operations here */
    get(`/posts?userId=${user.id}`);
  })
  .then(posts => {
    const latestPost = posts[0]
    return get(`/comments?postId=${latestPost.id}`);
  })
  .then((comments) => {
    const latestComment = comments[0]
    return get(`/users/username=${latestComment.username}`);
  })
  .then((user) => {
    console.log(user);
  })
  .catch(() => {
    console.log("Error")
  })

const isResolved = true;

const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve("completed");
  } else {
    reject("data")
  }
})

// console.log(promise);

promise.then((result) => {
  // console.log(result);
}).catch(() => {
  // console.log("Rejected");
})


/*

function get(path, cb) {
  const data = {} // somehow process it
  cb(data)
}

function getUserNameFromComment(username) {
  get(`/users?username=${username}`, (user) => {
    get(`/posts/userId=${userId}`, () => {
      get(`/comments?postId=${posts[0].id}`, (comments) => {
        get(`/users?username=${comments[0].username}`, (user) => {
          console.log(user)
        })
      })
    })
  })
}

getUserNameFromComment("Abul");

*/

function wait(ms) {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, ms);
  })

  return promise;
}

const wait2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10).then(() => {
  // console.log("Done in 10ms")
});

wait(100).then(() => {
  // console.log("Done in 100ms")
});

wait(1000).then(() => {
  // console.log("Done in 1000ms")
});

wait2(2000).then(() => {
  // console.log("Done in 1000ms from wait2")
});