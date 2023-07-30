import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (count == 5) {
      setLock(true);
    }
  }, [count]);
  console.log("Count", count, "lock", lock);

  return (
    <div>
      <h1 id="test">{count}</h1>
      <button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
        ADD {lock && "(locked)"}
      </button>
    </div>
  );
};

export default UseEffect;
