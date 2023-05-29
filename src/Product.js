import React from 'react';

function Product({ product, onAddToBasket }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button className="add-btn" onClick={() => onAddToBasket(product)}>Add to Basket</button>
    </div>
  );
}

export default Product;
