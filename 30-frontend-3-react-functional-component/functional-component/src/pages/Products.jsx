import React from 'react'
import { products } from '../mockData/products';
import TableRow from '../components/TableRow';

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => <TableRow {...product} key={product.id} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products;