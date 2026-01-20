import styles from "./CartSummary.module.css";

export const CartSummary = ({ quantity, price }) => {
  return (
    <aside className={styles.cartSummary} tabIndex={0}>
      <h2 className={styles.summaryHeading}>Total </h2>
      <ul className={styles.summarySubList}>
        <li>
          <h3 className={styles.summaryContentHeading}>
            Items: <span className={styles.summaryContent}>{quantity}</span>
          </h3>
        </li>
        <li>
          <h3 className={styles.summaryContentHeading}>
            Amount: <span className={styles.summaryContent}>$ {price}</span>
          </h3>
        </li>
      </ul>
    </aside>
  );
};
