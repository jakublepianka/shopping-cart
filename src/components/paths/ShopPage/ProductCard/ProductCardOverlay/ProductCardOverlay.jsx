import { useState } from "react";
import styles from "./ProductCardOverlay.module.css";
import addToCartIcon from "../../../../../assets/icons/shopping-bag-add.png";
import { Rating } from "./Rating/Rating";
import { useCart } from "../../../../../context/Cart/useCart";

export const ProductCardOverlay = ({ product }) => {
  const { addToCart } = useCart();
  const [animationTick, setAnimationTick] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setAnimationTick((prev) => prev + 1);
    addToCart({
      id: product.id,
      name: product.title,
      quantity: 1,
      availableQuantity: product.stock,
      image: product.thumbnail,
    });
  };
  return (
    <div className={styles.overlay}>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <Rating rating={product.rating}></Rating>
      <span className={styles.priceLabel}>$ {product.price}</span>
      <button
        key={animationTick}
        className={`${styles.addButton} ${
          animationTick ? styles.animate : undefined
        }`}
        onClick={handleClick}
      >
        <img src={addToCartIcon} className={styles.addIcon}></img>
      </button>
    </div>
  );
};
