import './App.css'
import ButtonGroup from './components/button-group/ButtonGroup';
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
            <ButtonGroup text="Reset" type="reset" variant="warning" size="small" />
            <ButtonGroup text="Submit" type="submit" variant="primary" size="medium" />
            <ButtonGroup text="Cancel" type="button" variant="error" size="large" />
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