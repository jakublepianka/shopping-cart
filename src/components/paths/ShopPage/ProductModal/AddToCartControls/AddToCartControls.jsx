import { CartInputControls } from "../../../../CartInputControls/CartInputControls";
import styles from "./AddToCartControls.module.css";
import { useAddToCartControls } from "../../../../../hooks/useAddToCartControls";
import { useCart } from "../../../../../context/Cart/useCart";
import { useState } from "react";

export const AddToCartControls = ({ product }) => {
  const { addToCart } = useCart();
  const {
    quantity,
    isValid,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
  } = useAddToCartControls({ availableQuantity: product.stock });
  const [animationTick, setAnimationTick] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setAnimationTick((prev) => prev + 1);
    addToCart(product, quantity);
  };

  return (
    <form
      className={styles.addToCartForm}
      onSubmit={handleSubmit}
      aria-label="Add to cart"
    >
      <button
        type="submit"
        key={animationTick}
        className={`${styles.submitToCart} ${
          animationTick ? styles.animate : undefined
        }`}
        disabled={!isValid}
      >
        Add to cart
      </button>
      <CartInputControls
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
        onChange={(val) => handleInputChange(val)}
        isValid={isValid}
        quantity={quantity}
        availableQuantity={product.stock}
      />
    </form>
  );
};
