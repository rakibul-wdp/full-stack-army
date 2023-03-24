import './App.css'

function App() {
  return (
    <div style={{ width: "60%", backgroundColor: "#FCEDF0", color: "black", padding: "2rem" }}>
      <div>
        <h3>Sign Up</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <form>
          <div>
            <label htmlFor="name">What is Your Name?</label>
            <input style={{ padding: "5px", outline: "none" }} type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">What is Your Email?</label>
            <input style={{ padding: "5px", outline: "none" }} type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">What is Your Password?</label>
            <input style={{ padding: "5px", outline: "none" }} type="password" name="password" id="password" />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <button style={{ width: "65%", background: "tomato", border: "none", padding: "5px 0px", color: "white" }} type='reset'>Reset</button>
            <button style={{ width: "65%", background: "tomato", border: "none", padding: "5px 0px", color: "white" }} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;