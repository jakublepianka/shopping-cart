import { Link } from "react-router";
import { useState } from "react";
import styles from "./Header.module.css";
import bagIcon from "../assets/icons/shopping-bag.png";
import barsIcon from "../assets/icons/bars-edited.png";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  function handleDropdown(){
    setIsOpen(status => !status);
  }

  return (
    <header>
      <div className={styles.header}>
        <h1>
          <Link to>
            <span className={styles.halfOne}>Mobile</span>
            <span className={styles.halfTwo}>Vault</span>
          </Link>
        </h1>
        <nav>
          <Link to="cart" className={styles.cartLink}>
            <img src={bagIcon} className={styles.cartIcon}></img>
            <span /* number of items inside the cart */></span>
          </Link>
          <button className={styles.btn} onClick={handleDropdown}>
            <img src={barsIcon} className={styles.navIcon}></img>
          </button>
          <div className={styles.navListContainer}>
            <ul className={isOpen ? styles.navListShown : styles.navListHidden}>
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="shop" className={styles.navLink}>Shop</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}