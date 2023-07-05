import React from 'react'

const TableRow = ({ id, productName, stock, price, quantity, total, increment, decrement }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={stock === 0} onClick={() => increment(id)}>+</button>
        <button disabled={quantity === 0} onClick={() => decrement(id)}>-</button>
      </td>
    </tr>
  )
}

export default TableRow;