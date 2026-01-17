import { Link } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import bagIcon from "../../assets/icons/shopping-bag.png";
import barsIcon from "../../assets/icons/bars-edited.png";
import { useCart } from "../../context/Cart/useCart";

export const Header = () => {
  const { sumQuantity: cartQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdownToggle() {
    setIsOpen((status) => !status);
  }

  function handleDropdownClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 600px)");
    const onChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>
          <Link to="/" onClick={handleDropdownClose}>
            <span className={styles.halfOne}>Mobile</span>
            <span className={styles.halfTwo}>Vault</span>
          </Link>
        </h1>
        <nav>
          <Link
            to="cart"
            className={styles.cartLink}
            onClick={handleDropdownClose}
            aria-label="cart"
          >
            <img
              src={bagIcon}
              className={styles.cartIcon}
              alt="shopping bag"
            ></img>
            {cartQuantity > 0 && cartQuantity <= 99 ? (
              <span className={styles.cartQuantity}>{cartQuantity}</span>
            ) : cartQuantity > 99 ? (
              <span className={styles.cartQuantity}>99+</span>
            ) : (
              <></>
            )}
          </Link>
          <button
            className={styles.btn}
            onClick={handleDropdownToggle}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <img src={barsIcon} className={styles.navIcon} alt=""></img>
          </button>
          <div className={styles.navListContainer}>
            <ul className={isOpen ? styles.navListShown : styles.navListHidden}>
              <li className={styles.navItem}>
                <Link
                  to="/"
                  className={styles.navLink}
                  onClick={handleDropdownClose}
                >
                  HOME
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="shop"
                  className={styles.navLink}
                  onClick={handleDropdownClose}
                >
                  SHOP
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
