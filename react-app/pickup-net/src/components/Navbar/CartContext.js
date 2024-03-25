import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart(currentCart => [...currentCart, game]);
    toast.success(`"${game.title}" added to cart successfully!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
          backgroundColor: 'black',
          color: 'white'
      }
    });
    console.log(`Added to cart: ${game.title}`);
  };

  const removeFromCart = (index) => {
    setCart(currentCart => currentCart.filter((_, itemIndex) => itemIndex !== index));
    toast.success('Item removed from cart', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            backgroundColor: 'black',
            color: 'white'
        }
      });
    console.log(`Item at index ${index} removed from cart`);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
