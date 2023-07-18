/**
 * TODO:
 * Handle user input fields
 * Handle operations
 * Handle a list of histories
 * Render history list
 * Restore the history
 */

import { useState } from "react";

const initialState = {
  a: 0,
  b: 0,
};

const Calculator = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClearOps = () => {
    setInputState({ ...initialState });
    setResult(0);
  };

  // const handleFieldA = (e) => {
  //   setInputState({
  //     ...inputState,
  //     a: parseInt(e.target.value),
  //   });
  // };

  // const handleFieldB = (e) => {
  //   setInputState({
  //     ...inputState,
  //     b: parseInt(e.target.value),
  //   });
  // };

  // const handleInputFields = (key, value) => {
  //   setInputState({
  //     ...inputState,
  //     [key]: value,
  //   });
  // };

  // const handleInputFields = (inp) => {
  //   setInputState({
  //     ...inputState, // previous state
  //     ...inp, // new state
  //   });
  // };

  const handleArithmeticsOps = (operations) => {
    const f = new Function(
      "operation",
      `
        return ${inputState.a} ${operations} ${inputState.b}
    `
    );
    setResult(f(operations));
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <div>
        <p>Inputs</p>
        <input
          value={inputState.a}
          onChange={handleInputFields}
          type="number"
          name="a"
          id=""
        />
        <input
          value={inputState.b}
          onChange={handleInputFields}
          type="number"
          name="b"
          id=""
        />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleArithmeticsOps("+")}>+</button>
        <button onClick={() => handleArithmeticsOps("-")}>-</button>
        <button onClick={() => handleArithmeticsOps("*")}>*</button>
        <button onClick={() => handleArithmeticsOps("/")}>/</button>
        <button onClick={handleClearOps}>Clear</button>
      </div>
      <div>
        <p>History</p>
        <p>
          <small>There is no History</small>
        </p>
      </div>
    </div>
  );
};

export default Calculator;
