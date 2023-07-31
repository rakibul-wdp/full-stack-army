import { useEffect, useState } from "react";

const AJAX = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);

  const max = 10;

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [id]);

  const nextHandler = () => {
    if (id < max) {
      setId(id + 1);
    }
  };

  const prevHandler = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  return (
    <div>
      <h1>User Details - {id}</h1>
      {loading && <p>Loading...!</p>}
      {!loading && user && (
        <div>
          name: {user.name}
          <br />
          email: {user.email}
          <br />
          Phone: {user.phone}
        </div>
      )}
      <div>
        <button disabled={id == 1} onClick={prevHandler}>
          Previous
        </button>
        <button disabled={id == max} onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AJAX;
