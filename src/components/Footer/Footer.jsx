import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <h1>I'm a footer</h1>
      <div className={styles.topCardContainer}></div>
      <div className={styles.contentContainer}></div>
    </footer>
  );
};
