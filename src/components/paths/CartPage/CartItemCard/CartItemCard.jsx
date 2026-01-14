import styles from "./CartItemCard.module.css";
import trashIcon from "../../../../assets/icons/trash.png";
import { CartInputControls } from "../../../CartInputControls/CartInputControls";
import { useAddToCartControls } from "../../../../hooks/useAddToCartControls";
import { useEffect } from "react";

export const CartItemCard = ({
  id,
  name,
  price,
  cartQuantity,
  availableQuantity,
  image,
  onDelete,
  onModify,
}) => {
  const {
    quantity = cartQuantity,
    isValid,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
  } = useAddToCartControls({ availableQuantity, initialQuantity: cartQuantity });

  useEffect(() => {
    if (cartQuantity === quantity) return;
    onModify(
      {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        availableQuantity: availableQuantity,
        image: image,
      },
      quantity
    );
  }, [
    id,
    name,
    price,
    quantity,
    availableQuantity,
    image,
    onModify,
    cartQuantity,
  ]);

  const total = (price * cartQuantity).toFixed(2);

  return (
    <>
      <li className={styles.itemCard}>
        <div className={styles.imgAndTitle}>
          <img src={image} className={styles.thumbnail} alt=""></img>
          <h2 className={styles.name}>{name}</h2>
        </div>

        <div className={styles.totalAndControls}>
          <h3 className={styles.total}>$ {total}</h3>
          <form>
            <CartInputControls
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
              onChange={handleInputChange}
              isValid={isValid}
              quantity={quantity}
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
      <hr />
    </>
  );
};
