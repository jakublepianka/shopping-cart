import styles from "./Rating.module.css";
import starIcon from "../../../../../../../assets/icons/star.png";

export const Rating = ({ rating }) => {
  const ratingCeil = Math.ceil(rating);
  const ratingDecimal = (rating - Math.floor(rating)) * 100;

  return (
    <div className={styles.rating} title={rating}>
      {Array.from({ length: ratingCeil }).map((_, i) =>
        ratingCeil === i + 1 ? (
          <span
            key={i}
            style={{
              overflow: "hidden",
              clipPath: `inset(0 ${100 - ratingDecimal}% 0 0)`,
            }}
          >
            <img src={starIcon} className={styles.star}></img>
          </span>
        ) : (
          <img key={i} src={starIcon} className={styles.star}></img>
        )
      )}
    </div>
  );
};
