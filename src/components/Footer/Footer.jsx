import styles from "./Footer.module.css";
import fbIcon from "../../assets/icons/facebook.png";
import igIcon from "../../assets/icons/instagram.png";
import xIcon from "../../assets/icons/twitter.png";
import liIcon from "../../assets/icons/linkedin.png";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.topCardContainer}>
        <section
          className={styles.topCardSection}
          aria-labelledby="shop-reassurance"
        >
          <h2 className={styles.reassuranceHeading} id="shop-reassurance">
            <span>Fast shipping.</span>
            <br />
            <span>Easy returns.</span>
          </h2>
          <p className={styles.reassuranceText}>
            <span>All mobile accessories ship within 24h.</span> <br />{" "}
            <span>30-day hassle-free returns.</span>
          </p>
          <a href="#" className={styles.shippingLink}>
            Shipping & returns
          </a>
        </section>
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>
          <span className={styles.halfOne}>Mobile</span>
          <span className={styles.halfTwo}>Vault</span>
        </h1>
        <div className={styles.upperContent}>
          <ul className={styles.linksList}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
          </ul>
        </div>
        <div className={styles.lowerContent}>
          <ul className={styles.policiesList} aria-label="Legal documents">
            <li>
              <a href="#">Cookies Policy</a>
            </li>
            <li>
              <a href="#">Legal Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <ul className={styles.socialsList} aria-label="Socials">
            <li>
              <a href="facebook.com">
                <img src={fbIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="instagram.com">
                <img src={igIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="x.com">
                <img src={xIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="linkedin.com">
                <img src={liIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
