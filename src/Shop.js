import React, { useState } from "react";
import Basket from "./Basket";
import Product from "./Product";

export default function Shop() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((oldBasket) => {
      const productInBasket = oldBasket.find(
        (item) => item.name === product.name
      );
      if (productInBasket) {
        productInBasket.quantity += 1;
        return [...oldBasket];
      } else {
        return [...oldBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (productName) => {
    setBasket((oldBasket) => {
      const product = oldBasket.find((item) => item.name === productName);
      if (product) {
        product.quantity += 1;
      console.log(product.quantity);}

      return [...oldBasket];
    });
  };

  const decreaseQuantity = (productName) => {
    setBasket((oldBasket) => {
      const product = oldBasket.find((item) => item.name === productName);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return oldBasket.filter((item) => item.name !== productName);
        }
      }
      return [...oldBasket];
    });
  };

  return (
    <div>
      <h1>Shop</h1>
      <Product
        product={{ name: "Product 1", price: 10 }}
        onAddToBasket={addToBasket}
      />
      <Product
        product={{ name: "Product 2", price: 20 }}
        onAddToBasket={addToBasket}
      />
      <Product
        product={{ name: "Product 3", price: 30 }}
        onAddToBasket={addToBasket}
      />
      <Basket
        basket={basket}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />
    </div>
  );
}
