import { ProductCardOverlay } from "./ProductCardOverlay/ProductCardOverlay";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product, onOpen }) => {
  return (
    <li className={styles.productCard} onClick={onOpen}>
      <article>
        <img src={product.thumbnail} className={styles.thumbnail}></img>
        <ProductCardOverlay product={product} />
        {/* absolute overlay with:
      1. name
      2. price
      3. add to cart icon ???

      open on click/tap for mobile or hover on pc:
      1. rating 1-5 (stars) (top-right, vertical)
      5. open details icon or open details on second click?
      -. details card on tap/click 
      -. for non-mobile show overlay on hover???*/}
      </article>
    </li>
  );
};
