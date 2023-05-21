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

const isResolved = true;

const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve("completed");
  } else {
    reject("data")
  }
})

console.log(promise);

promise.then((result) => {
  console.log(result);
}).catch(() => {
  console.log("Rejected");
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