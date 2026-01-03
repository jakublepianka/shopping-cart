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
      <button onClick={onPrev} className={styles.prevButton}>
        <img src={arrowIcon} className={styles.prevArrow} />
      </button>
      <button onClick={onNext} className={styles.nextButton}>
        <img src={arrowIcon} className={styles.nextArrow} />
      </button>
      <div className={styles.goToButtonsContainer}>
        {originalImages.map((image, i) => (
          <span key={i} className={styles.goToButtonWrapper}>
            <button
              onClick={() => onGoTo(i)}
              className={
                modifiedImages[offset] === originalImages[i]
                  ? styles.goToButtonCurrent
                  : styles.goToButton
              }
            ></button>
          </span>
        ))}
      </div>
    </>
  );
};
