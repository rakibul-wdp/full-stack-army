import './App.css'

function App() {
  return (
    <div>
      <div>
        <h3>Sign Up</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <form>
          <div>
            <label htmlFor="name">What is Your Name?</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">What is Your Email?</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">What is Your Password?</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button type='reset'>Reset</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
