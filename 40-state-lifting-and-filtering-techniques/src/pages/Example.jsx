import useFetchData from "../hooks/useFetchData";

const Example = () => {
  const users = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    (data) => data.map((item) => ({ id: item.id, name: item.name }))
  );
  const posts = useFetchData("https://jsonplaceholder.typicode.com/posts");
  const comments = useFetchData(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Users</h1>
        <hr />
        {users.loading && <h3>Loading...!</h3>}
        {users.error && <h3>{users.error}</h3>}
        {users.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
        {posts.loading && <h3>Loading...!</h3>}
        {posts.error && <h3>{posts.error}</h3>}
        {posts.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
      <div>
        <h1>Comments</h1>
        <hr />
        {comments.loading && <h3>Loading...!</h3>}
        {comments.error && <h3>{comments.error}</h3>}
        {comments.data.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Example;

/**
 * 1. fetch and update state
 * 2. handle loading
 * 3. handle error
 */
