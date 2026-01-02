import { Link } from "react-router";
import { Carousel } from "../../Carousel/Carousel";
import { useProducts } from "../../../context/useProducts";
import styles from "./Home.module.css";

export const Home = () => {
  const { products } = useProducts();
  const images = (products || [])
    .filter((product) => product.rating > 4.4)
    .map((product) => product.thumbnail);

  const carouselOptions = {
    isAuto: true,
    transitionDuration: 1000,
    transitionDelay: 6000,
  };

  return (
    <>
      <div className={styles.homeMainOne}>
        <div className={styles.headingContainer}>
          <h1 className={styles.mainHeading}>
            Accessories that keep up with your phone
          </h1>
          <Link to="/shop" className={styles.shopLink}>
            Shop Now !
          </Link>
        </div>
      </div>
      <div className={styles.homeMainTwo}>
        <h1>This is a second part</h1>
        <Carousel images={images} carouselOptions={carouselOptions}></Carousel>
      </div>
    </>
  );
};
