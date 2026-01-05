import { Rating } from "./Rating/Rating";
import styles from "./ProductCardOverlay.module.css";
import addToCartIcon from "../../../../../assets/icons/shopping-bag-add.png";

export const ProductCardOverlay = ({ product }) => {
  return (
    <div className={styles.overlay}>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <Rating rating={product.rating}></Rating>
      <span className={styles.priceLabel}>$ {product.price}</span>
      <button className={styles.addButton}>
        <img src={addToCartIcon} className={styles.addIcon}></img>
      </button>
    </div>
  );
};
