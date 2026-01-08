import { CartInputControls } from "./CartInputControls/CartInputControls";
import styles from "./AddToCartControls.module.css";
import { useAddToCartControls } from "./useAddToCartControls";

export const AddToCartControls = ({ id, availableQuantity }) => {
  const {
    quantity,
    isValid,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
    handleSubmit,
  } = useAddToCartControls({ id, availableQuantity });

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
        availableQuantity={availableQuantity}
      />
    </form>
  );
};
