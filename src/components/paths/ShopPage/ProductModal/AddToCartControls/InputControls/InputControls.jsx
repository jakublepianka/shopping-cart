import styles from "./InputControls.module.css";
import minusIcon from "../../../../../../assets/icons/minus.png";
import plusIcon from "../../../../../../assets/icons/plus.png";

export const InputControls = ({
  onAdd,
  onSubtract,
  onChange,
  isValid,
  quantity,
  availableQuantity,
}) => {
  return (
    <div className={styles.inputContainer}>
      <button type="button" className={styles.minusButton} onClick={onSubtract}>
        <img src={minusIcon} className={styles.minusIcon} alt="" />
      </button>
      <input
        type="number"
        className={styles.inputField}
        id="quantity"
        min={1}
        max={availableQuantity}
        value={quantity}
        onChange={(e) => onChange(e)}
      ></input>
      <button type="button" className={styles.plusButton} onClick={onAdd}>
        <img src={plusIcon} className={styles.plusIcon} alt="" />
      </button>
      {!isValid && (
        <span className={styles.invalidMsg}>
          Must be between 1 and {availableQuantity}
        </span>
      )}
    </div>
  );
};
