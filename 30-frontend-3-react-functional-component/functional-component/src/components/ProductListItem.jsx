import React, { useState } from 'react'

const ProductListItem = ({ product, stock }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < stock) {
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
      <h1>{product}</h1>
      <h3>{count} / {stock}</h3>
      <div>
        <button disabled={count === stock} onClick={handleIncrement}>Increment</button>
        <button disabled={count === 0} onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default ProductListItem;