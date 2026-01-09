import { CartInputControls } from "./CartInputControls/CartInputControls";
import styles from "./AddToCartControls.module.css";
import { useAddToCartControls } from "./useAddToCartControls";
import { useCart } from "../../../../../context/Cart/useCart";

export const AddToCartControls = ({ id, name, image, availableQuantity }) => {
  const { addToCart } = useCart();
  const {
    quantity,
    isValid,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
  } = useAddToCartControls({ availableQuantity });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    addToCart({
      id: id,
      name: name,
      quantity: quantity,
      availableQuantity: availableQuantity,
      image: image,
    });
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
        availableQuantity={availableQuantity}
      />
    </form>
  );
};
