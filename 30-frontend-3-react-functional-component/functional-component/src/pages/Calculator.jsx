/**
 * TODO:
 * Handle user input fields
 * Handle operations
 * Handle a list of histories
 * Render historyItem list
 * Restore the historyItem
 */

import { useState } from "react";
import HistorySection from "../components/history/HistorySection";
import InputSection from "../components/inputs/InputSection";
import OperationSection from "../components/operation/OperationSection";

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
      inputs: { ...inputState },
      operations,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem.id);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <InputSection
        inputs={{ initialState }}
        handleInputFields={handleInputFields}
      />
      {/* TODO: Operation section */}
      <OperationSection
        handleArithmeticsOps={handleArithmeticsOps}
        handleClearOps={handleClearOps}
      />

      <HistorySection
        histories={histories}
        restoredHistory={restoredHistory}
        handleRestoreBtn={handleRestoreBtn}
      />
    </div>
  );
};

export default Calculator;

/**
 
  const handleFieldA = (e) => {
    setInputState({
      ...inputState,
      a: parseInt(e.target.value),
    });
  };

  const handleFieldB = (e) => {
    setInputState({
      ...inputState,
      b: parseInt(e.target.value),
    });
  };

  const handleInputFields = (key, value) => {
    setInputState({
      ...inputState,
      [key]: value,
    });
  };

  const handleInputFields = (inp) => {
    setInputState({
      ...inputState, // previous state
      ...inp, // new state
    });
  };
 
 */
