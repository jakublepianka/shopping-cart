import { useContext, useMemo } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product, quantity) => {
    const shapedProduct = shapeProduct(product, quantity);
    setCart((prev) => {
      const cartMap = new Map(prev.map((item) => [item.id, item]));
      const existing = cartMap.get(shapedProduct.id);
      if (existing) {
        const newQuantity = Math.min(
          existing.quantity + shapedProduct.quantity,
          shapedProduct.availableQuantity
        );
        cartMap.set(shapedProduct.id, {
          ...existing,
          quantity: newQuantity,
        });
      } else cartMap.set(shapedProduct.id, { ...shapedProduct });

      return Array.from(cartMap.values());
    });
  };

  const shapeProduct = (product, quantity) => {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: quantity,
      availableQuantity: product.stock,
      image: product.thumbnail,
    };
  };

  const sumQuantity = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.quantity, 0),
    [cart]
  );

  const sumPrice = useMemo(
    () =>
      cart
        .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        .toFixed(2),
    [cart]
  );

  return {
    cart,
    addToCart,
    sumQuantity,
    sumPrice,
  };
};
