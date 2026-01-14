import styles from "./CartItemCard.module.css";
import trashIcon from "../../../../assets/icons/trash.png";
import { CartInputControls } from "../../../CartInputControls/CartInputControls";

export const CartItemCard = ({
  name,
  price,
  cartQuantity,
  availableQuantity,
  image,
  onDelete,
  onIncrement,
  onDecrement,
  onQuantityChange,
}) => {
  const total = (price * (cartQuantity || 1)).toFixed(2);

  return (
    <li className={styles.itemCard}>
      <div className={styles.imgAndTitle}>
        <img src={image} className={styles.thumbnail} alt=""></img>
        <h2 className={styles.name}>{name}</h2>
      </div>

      <div className={styles.totalAndControls}>
        <h3 className={styles.total}>$ {total}</h3>
        <form>
          <CartInputControls
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              onQuantityChange(value);
            }}
            isValid={cartQuantity <= availableQuantity && cartQuantity > 0}
            quantity={cartQuantity}
            availableQuantity={availableQuantity}
          />
        </form>
      </div>
      <button
        className={styles.deleteButton}
        onClick={onDelete}
        aria-label="Remove from cart"
      >
        <img src={trashIcon} className={styles.trashIcon} alt="" />
      </button>
    </li>
  );
};
