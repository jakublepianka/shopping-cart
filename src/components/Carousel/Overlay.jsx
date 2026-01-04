import styles from "./Carousel.module.css";
import arrowIcon from "../../assets/icons/arrow.png";

export const Overlay = ({
  onNext,
  onPrev,
  onGoTo,
  originalImages,
  modifiedImages,
  offset,
}) => {
  return (
    <>
      <button
        onClick={onPrev}
        className={styles.prevButton}
        aria-label="Previous image"
      >
        <img src={arrowIcon} className={styles.prevArrow} />
      </button>
      <button
        onClick={onNext}
        className={styles.nextButton}
        aria-label="Next image"
      >
        <img src={arrowIcon} className={styles.nextArrow} />
      </button>
      <div className={styles.goToButtonsContainer}>
        {originalImages.map((image, i) => (
          <span key={i} className={styles.goToButtonWrapper}>
            <button
              onClick={() => onGoTo(i + 1)}
              className={
                modifiedImages[offset] === originalImages[i]
                  ? styles.goToButtonCurrent
                  : styles.goToButton
              }
              aria-label={`Show image ${i + 1}`}
            ></button>
          </span>
        ))}
      </div>
    </>
  );
};
