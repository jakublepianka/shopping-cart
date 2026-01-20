import { Link } from "react-router";
import { Carousel } from "../../Carousel/Carousel";
import { useProducts } from "../../../context/Products/useProducts";
import styles from "./Home.module.css";

export const Home = () => {
  const { products } = useProducts();
  const images = (products || [])
    .filter((product) => product.rating > 4.4)
    .map((product) => product.thumbnail);

  const carouselOptions = {
    isAuto: true,
    transitionDuration: 800,
    transitionDelay: 6000,
  };

  return (
    <>
      <div className={styles.homeMainOne}>
        <div className={styles.headingContainer}>
          <h1 className={styles.mainHeading}>
            Accessories that keep up with your phone
          </h1>
          <h2 className={styles.subHeading}>Accessories done right</h2>
          <Link to="/shop" className={styles.shopLink}>
            Shop Now !
          </Link>
        </div>
      </div>
      <div className={styles.homeMainTwo}>
        <div className={styles.homeMainTwoContent}>
          <div className={styles.carouselContainer}>
            <Carousel
              images={images}
              showLabel={true}
              isLink={true}
              carouselOptions={carouselOptions}
            ></Carousel>
          </div>
          <div className={styles.brandStatements}>
            <section
              className={styles.statementsSection}
              aria-label="Statements"
            >
              <div className={styles.statementContainer}>
                <div className={styles.boxOne}></div>
                <h1 className={styles.phraseOneBase}>
                  Small upgrades,
                  <br /> big difference
                </h1>
                <h1 className={styles.phraseOneInverted} aria-hidden="true">
                  Small upgrades,
                  <br /> big difference
                </h1>
              </div>
              <div className={styles.statementContainer}>
                <div className={styles.boxTwo}></div>
                <h1 className={styles.phraseTwoBase}>
                  Accessories that
                  <br /> click with style
                </h1>
                <h1 className={styles.phraseTwoInverted} aria-hidden="true">
                  Accessories that
                  <br /> click with style
                </h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
