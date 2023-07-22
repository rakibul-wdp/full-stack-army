/**
 * TODO:
 * Handle user input fields
 * Handle operations
 * Handle a list of histories
 * Render historyItem list
 * Restore the historyItem
 */

import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import NumberField from "../components/ui/NumberField";

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getId = generateId();

const initialState = {
  a: 20,
  b: 10,
};

const Calculator = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  useEffect(() => {
    if (restoredHistory !== null) {
      handleArithmeticsOps(restoredHistory.operations);
    }
  }, [inputState]);

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

    if (!restoredHistory) {
      generateHistory(operations, result);
    }
  };

  const generateHistory = (operations, result) => {
    const historyItem = {
      id: getId.next().value,
      inputs: inputState,
      operations,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState(() => {
      return { ...historyItem.inputs };
    });
    setRestoredHistory(historyItem);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <div>
        <p>Inputs</p>
        <NumberField
          value={inputState.a}
          onChange={handleInputFields}
          name={"a"}
        />
        <NumberField
          value={inputState.b}
          onChange={handleInputFields}
          name={"b"}
        />
      </div>
      <div>
        <p>Operations</p>
        <Button
          text={"+"}
          onClick={() => handleArithmeticsOps("+")}
          customStyle={{ background: "green" }}
          disabled={true}
        />
        {/* <button onClick={() => handleArithmeticsOps("+")}>+</button> */}
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
                <button
                  onClick={() => handleRestoreBtn(historyItem)}
                  disabled={
                    restoredHistory !== null &&
                    restoredHistory.id === historyItem.id
                  }
                >
                  Restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calculator;
