import { CartInputControls } from "../../../../CartInputControls/CartInputControls";
import styles from "./AddToCartControls.module.css";
import { useAddToCartControls } from "../../../../../hooks/useAddToCartControls";
import { useCart } from "../../../../../context/Cart/useCart";

export const AddToCartControls = ({ product }) => {
  const { addToCart } = useCart();
  const {
    quantity,
    isValid,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
  } = useAddToCartControls({ availableQuantity: product.availableQuantity });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    addToCart(product);
  };

  return (
    <form className={styles.addToCartForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.submitToCart}>
        Add to cart
      </button>
      <CartInputControls
        onAdd={incrementQuantity}
        onSubtract={decrementQuantity}
        onChange={(e) => handleInputChange(e)}
        isValid={isValid}
        quantity={quantity}
        availableQuantity={product.availableQuantity}
      />
    </form>
  );
};
