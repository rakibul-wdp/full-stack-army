import { useState } from "react";

const initialState = {
  a: 0,
  b: 0,
};

const Calculator = () => {
  const [inputState, setInputState] = useState({ ...initialState });

  // const handleInputFields = (e) => {
  //   setInputState({
  //     ...inputState,
  //     [e.target.name]: parseInt(e.target.value),
  //   });
  // };

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

  const handleInputFields = (inp) => {
    setInputState({
      ...inputState, // previous state
      ...inp, // new state
    });
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: 0</h1>
      <div>
        <p>Inputs</p>
        <input
          value={inputState.a}
          onChange={(e) => handleInputFields({ a: parseInt(e.target.value) })}
          type="number"
          name="a"
          id=""
        />
        <input
          value={inputState.b}
          onChange={(e) => handleInputFields({ b: parseInt(e.target.value) })}
          type="number"
          name="b"
          id=""
        />
      </div>
      <div>
        <p>Operations</p>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>Clear</button>
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
