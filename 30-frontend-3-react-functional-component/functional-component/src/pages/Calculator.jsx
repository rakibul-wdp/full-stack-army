/**
 * TODO:
 * Handle user input fields
 * Handle operations
 * Handle a list of histories
 * Render history list
 * Restore the history
 */

import { useState } from "react";

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getId = generateId();

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

    const history = {
      id: getId.next().value,
      inputs: inputState,
      operations,
      date: new Date(),
    };
    console.log(history);
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
        <ul>
          <li>
            <p>Operation: 10 + 20, Result: 30</p>
            <small>18/7/2023</small>
            <br />
            <button>Restore</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
