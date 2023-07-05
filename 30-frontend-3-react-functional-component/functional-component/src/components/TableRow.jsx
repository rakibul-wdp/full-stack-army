import React from 'react'

const TableRow = ({ id, productName, stock, price, quantity, total, increment }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={increment}>+</button>
        <button>-</button>
      </td>
    </tr>
  )
}

export default TableRow;