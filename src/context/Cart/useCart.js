import { useContext, useMemo } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product, quantity) => {
    const shapedProduct = shapeProduct(product, quantity);
    setCart((prev) => cartSetter(prev, shapedProduct));
  };

  const modifyCartQuantity = (product, quantity) => {
    setCart((prev) => cartSetter(prev, product, quantity));
  };

  const deleteFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  const cartSetter = (prev, currProduct, modifiedQuantity = 0) => {
    const cartMap = new Map(prev.map((item) => [item.id, item]));
    const existing = cartMap.get(currProduct.id);
    if (existing) {
      const newQuantity = Math.min(
        modifiedQuantity
          ? currProduct.quantity
          : existing.quantity + currProduct.quantity,
        currProduct.availableQuantity
      );
      cartMap.set(currProduct.id, {
        ...existing,
        quantity: newQuantity,
      });
    } else cartMap.set(currProduct.id, { ...currProduct });
    
    return Array.from(cartMap.values());
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
    modifyCartQuantity,
    deleteFromCart,
    sumQuantity,
    sumPrice,
  };
};
