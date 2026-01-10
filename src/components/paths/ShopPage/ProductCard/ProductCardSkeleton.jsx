import styles from "./ProductCardSkeleton.module.css";

export const ProductCardSkeleton = () => {
  return (
    <li className={styles.loader} aria-hidden="true">
      <span className={styles.skeletonTitle}></span>
      <span className={styles.skeletonRating}></span>
      <span className={styles.skeletonPrice}></span>
      <span className={styles.skeletonButton}></span>
    </li>
  );
};
