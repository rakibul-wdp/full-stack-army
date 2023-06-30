import React from 'react';
import { socialIcons, product } from '../mockData/socialIcons';

const ProductCard = () => {
  return (
    <div>
      <h3>Bread Crumbs</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        {
          product.breadcrumbs.map((item, index) => (
            <div key={index}>
              <a href={item.link}>{item.text}</a>
              {
                index < product.breadcrumbs.length - 1 && (
                  <span>{"  /  "}</span>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductCard;