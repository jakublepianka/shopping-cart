import { useState } from "react";
import { InputControls } from "./InputControls/InputControls";
import styles from "./AddToCartControls.module.css";

export const AddToCartControls = ({ id, availableQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const incrementQuantity = () =>
    setQuantity((prev) => {
      const num = parseInput(prev);
      validate(num);
      return num <= availableQuantity ? num + 1 : num;
    });

  const decrementQuantity = () =>
    setQuantity((prev) => {
      const num = parseInput(prev);
      validate(num);
      return num > 1 ? num - 1 : num;
    });

  const handleInputChange = (e) => {
    const value = e.target.value;
    validate(value);
    setQuantity((prev) => {
      if (value === "" || value <= "0") return "";
      const num = parseInt(value);
      if (/^$|^[1-9][0-9]*$/.test(num) && num > 0 && num <= availableQuantity)
        return num;
      return prev;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
  };

  const parseInput = (input) => {
    const num = parseInt(input);
    if (isNaN(num)) return 1;
    else return num;
  };

  const validate = (input) => {
    if (input > 0 && input <= availableQuantity) return setIsValid(true);
    else return setIsValid(false);
  };

  return (
    <form className={styles.addToCartForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.submitToCart}>
        Add to cart
      </button>
      <InputControls
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
