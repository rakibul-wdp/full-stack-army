import React, { useState } from 'react'
import { productsList } from '../mockData/products';
import TableRow from '../components/TableRow';

const Products = () => {
  const [products, setProducts] = useState(productsList.map((item) => ({
    ...item,
    quantity: 0,
    total: 0,
  })));

  const incrementQuantity = (id) => {
    setProducts(products.map(product => {
      if (id == product.id && product.stock > 0) {
        product.quantity++;
        product.stock--;
        product.total = product.quantity * product.price;
      }

      return product
    }))
  };

  const decrementQuantity = (id) => {
    setProducts(products.map(product => {
      if (id == product.id && product.quantity > 0) {
        product.quantity--;
        product.stock++;
        product.total = product.quantity * product.price;
      }

      return product
    }))
  };

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
            products.map((product) => <TableRow decrement={decrementQuantity} increment={incrementQuantity} {...product} key={product.id} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products;