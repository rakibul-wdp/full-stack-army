import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCount, setTimeCount] = useState(5);

  useEffect(() => {
    if (count == 5) {
      setLock(true);
    }

    return () => {};
  }, [count]);

  /**
   * 1. create a interval for timeCount
   * 2. set count to 0, set lock to false and time count to 5
   */

  let timeInterval = null;
  useEffect(() => {
    timeInterval = setInterval(() => {
      setTimeCount(timeCount - 1);
    }, 1000);
  }, [lock]);

  return (
    <div>
      <h1 id="test">{count}</h1>
      <button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
        ADD {lock && `(locked - ${timeCount}s)`}
      </button>
    </div>
  );
};

export default UseEffect;
