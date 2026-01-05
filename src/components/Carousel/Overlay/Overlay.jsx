import styles from "../Carousel.module.css";
import arrowIcon from "../../../assets/icons/arrow.png";

const defaultClassNames = {
  prevButton: styles.prevButton,
  prevArrow: styles.prevArrow,
  nextButton: styles.nextButton,
  nextArrow: styles.nextArrow,
  goToButtonsContainer: styles.goToButtonsContainer,
  goToButtonWrapper: styles.goToButtonWrapper,
  goToButton: styles.goToButton,
  goToButtonCurrent: styles.goToButtonCurrent,
};

export const Overlay = ({
  onNext,
  onPrev,
  onGoTo,
  originalImages,
  modifiedImages,
  offset,
  classNames = {},
}) => {
  const classes = { ...defaultClassNames, ...classNames };
  return (
    <>
      <button
        onClick={onPrev}
        className={classes.prevButton}
        aria-label="Previous image"
      >
        <img src={arrowIcon} className={classes.prevArrow} />
      </button>
      <button
        onClick={onNext}
        className={classes.nextButton}
        aria-label="Next image"
      >
        <img src={arrowIcon} className={classes.nextArrow} />
      </button>
      <div className={classes.goToButtonsContainer}>
        {originalImages.map((image, i) => (
          <span key={i} className={classes.goToButtonWrapper}>
            <button
              onClick={() => onGoTo(i + 1)}
              className={
                modifiedImages[offset] === originalImages[i]
                  ? classes.goToButtonCurrent
                  : classes.goToButton
              }
              aria-label={`Show image ${i + 1}`}
            ></button>
          </span>
        ))}
      </div>
    </>
  );
};
