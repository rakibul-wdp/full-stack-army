import React, { useState } from 'react'

const ProductListItem = () => {
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
      <h1>Product 1</h1>
      <h3>{count} / 10</h3>
      <div>
        <button disabled={count === 10} onClick={handleIncrement}>Increment</button>
        <button disabled={count === 0} onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default ProductListItem;