import styles from "./ProductModal.module.css";

export const ProductModal = ({product}) => {
  return (
    <>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalCard}>
        <h1>{product.title}</h1>
        
      </div>
    </>
  );
};
