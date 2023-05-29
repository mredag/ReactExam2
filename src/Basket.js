import React, { useEffect } from "react";

export default function Basket({ basket, onIncrease, onDecrease }) {
    
        
  return (
    <div className="basket">
      <h2>Basket</h2>
      <ul>
        {basket.map((product, index) => (
          <li key={index}>
            {product.name} - Quantity: {product.quantity}, Price: ${product.price * product.quantity}
            <button className="btn" onClick={() => {onIncrease(product.name)}}>+</button>
            <button className="btn" onClick={() => {onDecrease(product.name)}}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
