import { useState } from "react";
import minusIcon from "../../../../../assets/icons/minus.png";
import plusIcon from "../../../../../assets/icons/plus.png";
import styles from "./AddToCartControls.module.css";

export const AddToCartControls = ({ availableQuantity }) => {
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
    console.log(quantity);
  };

  const parseInput = (input) => {
    const num = parseInt(input);
    if (isNaN(num)) return 1;
    else return num;
  };

  const validate = (input) => {
    if (input > 0 && input <= availableQuantity /* || input === ""*/)
      return setIsValid(true);
    else return setIsValid(false);
  };

  return (
    <form className={styles.addToCartForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.submitToCart}>
        Add to cart
      </button>
      <div className={styles.inputContainer}>
        <button
          type="button"
          className={styles.minusButton}
          onClick={decrementQuantity}
        >
          <img src={minusIcon} className={styles.minusIcon} alt="" />
        </button>
        <input
          type="number"
          className={styles.inputField}
          id="quantity"
          min={1}
          max={availableQuantity}
          value={quantity}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <button
          type="button"
          className={styles.plusButton}
          onClick={incrementQuantity}
        >
          <img src={plusIcon} className={styles.plusIcon} alt="" />
        </button>
        {!isValid && (
          <span className={styles.invalidMsg}>
            Must be between 1 and {availableQuantity}
          </span>
        )}
      </div>
    </form>
  );
};
