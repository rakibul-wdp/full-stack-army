import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return { count, handleInc, handleDec };
};

export default useCounter;
