import { Link } from "react-router";
import styles from "./Home.module.css";
import bgSmall from "../../../assets/background/bg-small.jpeg";
import bgFull from "../../../assets/background/bg-full.jpeg";


export const Home = () => {
  return (
    <>
      <div className={styles.homeMainOne}>
        <div className={styles.headingContainer}>
          <h1 className={styles.mainHeading}>Accessories that keep up with your phone</h1>
          <Link to="/shop" className={styles.shopLink}>
            Shop Now !
          </Link>
        </div>
      </div>
      <div className={styles.homeMainTwo}>
        <h1>This is a second part</h1>
      </div>
    </>
  );
};
