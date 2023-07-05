import React, { useState } from 'react'
import { productsList } from '../mockData/products';
import TableRow from '../components/TableRow';

const Products = () => {
  const [products, setProducts] = useState(productsList.map((item) => ({
    ...item,
    quantity: 0,
    total: 0,
  })));

  const incrementQuantity = (id) => { console.log(id) };

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
            products.map((product) => <TableRow increment={() => incrementQuantity(product.id)} {...product} key={product.id} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products;