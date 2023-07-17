import { useState } from "react";

const JsonJsx = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleOperations = (id) => {
    let operationResult;
    if (id === "+") {
      operationResult = Number(firstInput) + Number(secondInput);
    } else if (id === "-") {
      operationResult = Number(firstInput) - Number(secondInput);
    } else if (id === "*") {
      operationResult = Number(firstInput) * Number(secondInput);
    } else {
      operationResult = Number(firstInput) / Number(secondInput);
    }
    setResult(operationResult);
    setFirstInput("");
    setSecondInput("");
    addToHistory(`${firstInput} ${id} ${secondInput} = ${operationResult}`);
  };

  const handleClear = () => {
    setFirstInput("");
    setSecondInput("");
  };

  const addToHistory = (entry) => {
    setHistory((prevHistory) => [...prevHistory, entry]);
  };

  const renderHistory = () => {
    if (history.length === 0) {
      return <small>There is no History</small>;
    } else {
      return (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry}
              <button onClick={() => restoreHistory(entry)}>Restore</button>
            </li>
          ))}
        </ul>
      );
    }
  };

  const restoreHistory = (entry) => {
    const values = entry.split(" ");
    setFirstInput(values[0]);
    setSecondInput(values[2]);
    setResult(values[4]);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <div>
        <p>Inputs</p>
        <input
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
          type="number"
          name=""
          id=""
        />
        <input
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
          type="number"
          name=""
          id=""
        />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleOperations("+")}>+</button>
        <button onClick={() => handleOperations("-")}>-</button>
        <button onClick={() => handleOperations("*")}>*</button>
        <button onClick={() => handleOperations("/")}>/</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        <p>History</p>
        {renderHistory()}
      </div>
    </div>
  );
};

export default JsonJsx;
