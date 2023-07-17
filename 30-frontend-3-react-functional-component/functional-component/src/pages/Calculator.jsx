const Calculator = () => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: 0</h1>
      <div>
        <p>Inputs</p>
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
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
