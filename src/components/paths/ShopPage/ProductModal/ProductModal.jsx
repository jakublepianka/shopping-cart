import styles from "./ProductModal.module.css";
import carouselStyles from "./Carousel.module.css";
import ratingStyles from "./Rating.module.css";
import plusIcon from "../../../../assets/icons/plus.png";
import { Carousel } from "../../../Carousel/Carousel";
import { AddToCartControls } from "./AddToCartControls/AddToCartControls";
import { Rating } from "../ProductCard/ProductCardOverlay/Rating/Rating";
import { ReviewsSection } from "./ReviewsSection/ReviewsSection";

export const ProductModal = ({ product, onClose }) => {
  const images = product.images || [];
  const carouselOptions = {
    isAuto: false,
    transitionDuration: 250,
  };

  return (
    <>
      <div
        className={styles.modalBackdrop}
        onClick={onClose}
        data-testid="modal-backdrop"
      ></div>
      <div
        className={styles.modalCard}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={styles.productName}>{product.title}</h1>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close"
        >
          <img src={plusIcon} className={styles.closeIcon} alt="" />
        </button>
        <div className={styles.ratingContainer}>
          <Rating
            rating={product.rating}
            ratingClassNames={{ ...ratingStyles }}
          ></Rating>
        </div>
        <div className={styles.priceContainer}>
          <span aria-label="Price">${product.price}</span>
        </div>
        <Carousel
          images={images}
          carouselOptions={carouselOptions}
          showSideNav={false}
          carouselClassNames={{
            carousel: carouselStyles.carousel,
            carouselSection: carouselStyles.carouselSection,
          }}
          overlayClassNames={{
            goToButtonsContainer: carouselStyles.goToButtonsContainer,
            goToButtonWrapper: carouselStyles.goToButtonWrapper,
            goToButton: carouselStyles.goToButton,
            goToButtonCurrent: carouselStyles.goToButtonCurrent,
          }}
        ></Carousel>
        <div className={styles.body}>
          <AddToCartControls product={product} />
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Description</h2>
            <p className={styles.bodyText}>{product.description}</p>
          </section>
          <section className={styles.section}>
            <ReviewsSection reviews={product.reviews} />
          </section>
        </div>
      </div>
    </>
  );
};
