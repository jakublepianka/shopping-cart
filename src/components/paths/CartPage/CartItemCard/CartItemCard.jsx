import styles from "./CartItemCard.module.css";
import trashIcon from "../../../../assets/icons/trash.png";
import { CartInputControls } from "../../../CartInputControls/CartInputControls";
import { useAddToCartControls } from "../../../../hooks/useAddToCartControls";

export const CartItemCard = ({
  name,
  price,
  quantity,
  availableQuantity,
  image,
  onDelete,
}) => {
  const { isValid } = useAddToCartControls({ availableQuantity });

  const total = (price * quantity).toFixed(2);

  return (
    <>
      <li className={styles.itemCard}>
        <div className={styles.imgAndTitle}>
          <img src={image} className={styles.thumbnail} alt=""></img>
          <h2 className={styles.name}>{name}</h2>
        </div>

        <div className={styles.totalAndControls}>
          <h3 className={styles.total}>$ {total}</h3>
          <CartInputControls
            isValid={isValid}
            quantity={quantity}
            availableQuantity={availableQuantity}
          />
        </div>
        <button className={styles.deleteButton} onClick={onDelete} aria-label="Remove from cart">
          <img src={trashIcon} className={styles.trashIcon} alt="" />
        </button>
      </li>
      <hr />
    </>
  );
};
