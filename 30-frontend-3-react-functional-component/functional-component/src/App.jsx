import './App.css'
import InputGroup from './components/input-group/InputGroup';

function App() {
  return (
    <div style={{ width: "60%", backgroundColor: "#FCEDF0", color: "black", padding: "2rem" }}>
      <div>
        <h3>Sign Up</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <form>
          <InputGroup label="What is your Name?" type="text" name="name" id="name" />
          <InputGroup label="What is your Email?" type="email" name="email" id="email" />
          <InputGroup label="What is your Password?" type="password" name="password" id="password" />
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

/**
 * When should we decide creating a new component?
 * **** When we need to write duplicate code
 * **** Which data are different
 */