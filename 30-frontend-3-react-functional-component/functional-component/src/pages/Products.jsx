import React from 'react'
import { products } from '../mockData/products';

const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default Products;