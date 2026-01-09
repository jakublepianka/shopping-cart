import styles from "./CartItemCard.module.css";
import trashIcon from "../../../../assets/icons/trash.png";
import { CartInputControls } from "../../../CartInputControls/CartInputControls";
import { useAddToCartControls } from "../../../../hooks/useAddToCartControls";

export const CartItemCard = ({
  id,
  name,
  price,
  quantity,
  availableQuantity,
  image,
}) => {
  const { isValid } = useAddToCartControls({
    availableQuantity: availableQuantity,
  });

  const total = (price * quantity).toFixed(2);
  
  return (
    <li>
      <div>
        <img src={image} alt=""></img>
      </div>
      <h1>{name}</h1>

      <div>
        <span>${total}</span>
        <CartInputControls
          isValid={isValid}
          quantity={quantity}
          availableQuantity={availableQuantity}
        />
      </div>
      <button>
        <img src={trashIcon} alt="" />
      </button>
    </li>
  );
};
