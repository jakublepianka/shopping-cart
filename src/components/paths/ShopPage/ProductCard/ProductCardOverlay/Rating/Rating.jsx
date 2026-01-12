import styles from "./Rating.module.css";
import starIcon from "../../../../../../assets/icons/star.png";

export const Rating = ({ rating }) => {
  const ratingCeil = Math.ceil(rating);
  const ratingDecimal = (rating - Math.floor(rating)) * 100;

  return (
    <div
      className={styles.rating}
      title={rating}
      role="img"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {Array.from({ length: ratingCeil }).map((_, i) =>
        i + 1 === ratingCeil ? (
          <span
            key={i}
            style={{
              overflow: "hidden",
              clipPath: `inset(0 ${100 - ratingDecimal}% 0 0)`,
            }}
            aria-hidden="true"
          >
            <img src={starIcon} className={styles.star} alt=""></img>
          </span>
        ) : (
          <img
            key={i}
            src={starIcon}
            className={styles.star}
            alt=""
            aria-hidden="true"
          ></img>
        )
      )}
    </div>
  );
};
