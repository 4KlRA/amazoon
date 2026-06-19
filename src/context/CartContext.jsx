import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const placeOrder = () => {
  if (cart.length === 0) return;

  const newOrder = {
    id: Date.now(),
    items: cart,
    date: new Date().toLocaleString()
  };

  setOrders((prev) => [...prev, newOrder]);

  setCart([]);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        placeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}