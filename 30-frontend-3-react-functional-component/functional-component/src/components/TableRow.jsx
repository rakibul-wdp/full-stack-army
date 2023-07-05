import React from 'react'

const TableRow = ({ id, productName, stock, price, quantity, total }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button>+</button>
        <button>-</button>
      </td>
    </tr>
  )
}

export default TableRow;