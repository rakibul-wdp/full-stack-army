import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, handleInc, handleDec } = useCounter();

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={handleInc}>+</button>
        <span>{count}</span>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
};

export default Counter;
