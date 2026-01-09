import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart((prev) => {
      const cartMap = new Map(prev.map((item) => [item.id, item]));
      const existing = cartMap.get(product.id);
      if (existing) {
        const newQuantity = Math.min(
          existing.quantity + product.quantity,
          product.availableQuantity
        );
        cartMap.set(product.id, {
          ...existing,
          quantity: newQuantity,
        });
      } else {
        cartMap.set(product.id, { ...product });
      }

      return Array.from(cartMap.values());
    });
  };

  const sumQuantity = () => cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const sumPrice = () => cart.reduce((acc, curr) => acc + curr.price, 0);

  return {
    cart,
    addToCart,
    sumQuantity,
    sumPrice,
  };
};
