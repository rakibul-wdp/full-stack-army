import { useEffect, useState } from "react";

const Example = () => {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {};

  const fetchPosts = async () => {};

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
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
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
