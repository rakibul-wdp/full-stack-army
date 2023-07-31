import { useState } from "react";

const Counter = () => {
  const [counter1, setCounter1] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        <span>{counter1}</span>
        <button onClick={() => setCounter1(counter1 - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
