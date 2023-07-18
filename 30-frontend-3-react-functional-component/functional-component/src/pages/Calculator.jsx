/**
 * TODO:
 * Handle user input fields
 * Handle operations
 * Handle a list of histories
 * Render historyItem list
 * Restore the historyItem
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
  const [histories, setHistories] = useState([]);

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
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input");
      return;
    }

    const f = new Function(
      "operation",
      `
        return ${inputState.a} ${operations} ${inputState.b}
    `
    );
    const result = f(operations);
    setResult(result);

    const historyItem = {
      id: getId.next().value,
      inputs: inputState,
      operations,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
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
        {histories.length === 0 ? (
          <p>
            <small>There is no History</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operation: {historyItem.inputs.a} {historyItem.operations}{" "}
                  {historyItem.inputs.b}, Result: {historyItem.result}
                </p>
                <small>{historyItem.date.toLocaleDateString()}</small>
                <br />
                <button>Restore</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calculator;
