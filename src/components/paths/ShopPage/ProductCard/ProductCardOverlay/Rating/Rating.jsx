import styles from "./Rating.module.css";
import starIcon from "../../../../../../assets/icons/star.png";
import { Fragment } from "react";

const defaultClasses = {
  rating: styles.rating,
  star: styles.star,
  backStar: styles.backStar,
};

export const Rating = ({ rating, ratingClassNames = {} }) => {
  const classes = { ...defaultClasses, ...ratingClassNames };
  const ratingCeil = Math.ceil(rating);
  const ratingDecimal = (rating - Math.floor(rating)) * 100;

  return (
    <div
      className={classes.rating}
      title={rating}
      role="img"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {Array.from({ length: ratingCeil }).map((_, i) =>
        i + 1 === ratingCeil && ratingDecimal > 0 ? (
          <Fragment key={i}>
            <span
              style={{
                overflow: "hidden",
                clipPath: `inset(0 ${100 - ratingDecimal}% 0 0)`,
              }}
              aria-hidden="true"
            >
              <img src={starIcon} className={classes.star} alt=""></img>
            </span>
            <img
              src={starIcon}
              className={classes.backStar}
              alt=""
              aria-hidden="true"
            />
          </Fragment>
        ) : (
          <img
            key={i}
            src={starIcon}
            className={classes.star}
            alt=""
            aria-hidden="true"
          ></img>
        )
      )}
    </div>
  );
};
