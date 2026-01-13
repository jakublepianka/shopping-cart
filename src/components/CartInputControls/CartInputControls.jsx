import styles from "./CartInputControls.module.css";
import minusIcon from "../../assets/icons/minus.png";
import plusIcon from "../../assets/icons/plus.png";

export const CartInputControls = ({
  onIncrement,
  onDecrement,
  onChange,
  isValid,
  quantity,
  availableQuantity,
}) => {
  return (
    <div className={styles.inputContainer} data-testid="cart-input-controls">
      <button
        type="button"
        className={styles.minusButton}
        onClick={onDecrement}
        aria-label="Decrement quantity"
      >
        <img src={minusIcon} className={styles.minusIcon} alt="" />
      </button>
      <input
        type="number"
        className={styles.inputField}
        min={1}
        max={availableQuantity}
        value={quantity}
        onChange={(e) => onChange(e)}
        aria-label="Quantity"
        aria-describedby={!isValid ? "quantity-error" : undefined}
        aria-invalid={!isValid}
      ></input>
      <button
        type="button"
        className={styles.plusButton}
        onClick={onIncrement}
        aria-label="Increment quantity"
      >
        <img src={plusIcon} className={styles.plusIcon} alt="" />
      </button>
      {!isValid && (
        <span className={styles.invalidMsg} role="alert" id="quantity-error">
          Must be between 1 and {availableQuantity}
        </span>
      )}
    </div>
  );
};
