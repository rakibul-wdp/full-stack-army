import { useState } from "react";
import HistorySection from "../components/cal-practice/history/HistorySection";
import InputSection from "../components/cal-practice/inputs/InputSection";
import OperationSection from "../components/operation/OperationSection";

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getId = generateId();

const initialState = { a: 20, b: 10 };

const CalculatorPractice = () => {
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
      inputs: { ...initialState },
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
    <div>
      <h1>Result: {result}</h1>
      <InputSection
        inputs={{ initialState }}
        handleInputFields={handleInputFields}
      />

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

export default CalculatorPractice;
