import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button disabled={count === 10} onClick={handleIncrement}>Increment</button>
        <button disabled={count === 0} onClick={handleDecrement}>Decrement</button>
      </div>
      {
        count >= 10 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem at ad adipisci nesciunt ex praesentium consequuntur fuga sint ea nobis illo fugiat eligendi reprehenderit ratione, aspernatur magni alias doloremque?</p>
      }
    </div>
  )
}

export default State;