import { ProductCardOverlay } from "./ProductCardOverlay/ProductCardOverlay";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product, onOpen }) => {
  return (
    <li
      className={styles.productCard}
      onClick={onOpen}
      tabIndex={0}
      role="button"
      aria-label={`${product.title}, $${product.price}`}
    >
      <article>
        <img
          src={product.thumbnail}
          className={styles.thumbnail}
          alt={product.title}
          loading="lazy"
        ></img>
        <ProductCardOverlay product={product} />
      </article>
    </li>
  );
};
