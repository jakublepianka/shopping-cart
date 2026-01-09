import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  // const addToCart = (product) => {
  //   setCart((prev) => {
  //     const found = prev.find((item) => item.id === product.id);
  //     const old = prev.filter((item) => item.id !== product.id);
  //     if (
  //       found &&
  //       found.quantity + product.quantity < product.availableQuantity
  //     ) {
  //       const newProduct = {
  //         ...found,
  //         quantity: found.quantity + product.quantity,
  //       };
  //       return [...old, newProduct];
  //     } else if (prev.length > 0) return [...prev, { ...product }];
  //     else return [{ ...product }];
  //   });
  // };

  // const addToCart = (product) => {
  //   setCart((prev) => {
  //     const found = prev.find((item) => item.id === product.id);
  //     if (!found) return [...prev, product];
  //     if (found.quantity + product.quantity <= product.availableQuantity) {
  //       const cleanedArr = prev.filter((item) => item.id !== found.id);
  //       const newProduct = {
  //         ...found,
  //         quantity: found.quantity + product.quantity,
  //       };
  //       return [...cleanedArr, newProduct];
  //     }
  //     return prev;
  //   });
  // };

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

  const isDuplicate = (product) => cart.some((item) => item.id === product.id);
  return {
    cart,
    addToCart,
  };
};
