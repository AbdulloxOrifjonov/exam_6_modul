/** @format */

import React, { createContext, useState } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCart = (newCart) => {
    console.log(newCart);
    setCart([...cart, { ...newCart, quantity: 1, id: cart.length }]);
    console.log(cart);
  };

  const deleteCart = (id) => {
    const newCart = cart.filter((carts) => carts.id !== id);
    setCart(newCart);
  };

  const quantityIncrement = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(newCart);
  };

  const quantityDecrement = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ deleteCart, addCart, cart, quantityIncrement, quantityDecrement }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
export { CartContext };
