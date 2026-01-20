import { Rating } from "../../ProductCard/ProductCardOverlay/Rating/Rating";
import styles from "./ReviewsSection.module.css";
import ratingStyles from "./Rating.module.css";

export const ReviewsSection = ({ reviews = [] }) => {
  return (
    <>
      <h2 className={styles.sectionHeading}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, i) => (
            <div key={i}>
              <li className={styles.review}>
                <div className={styles.reviewHeading}>
                  <Rating
                    rating={review.rating}
                    ratingClassNames={ratingStyles}
                  ></Rating>
                  <div className={styles.dateAndUser}>
                    <p className={styles.revierName}>{review.reviewerName}</p>
                    <hr className={styles.vr} aria-hidden="true" />
                    <p>{new Date(review.date).toLocaleDateString("de-DE")}</p>
                  </div>
                </div>
                <p className={styles.bodyText}>{review.comment}</p>
              </li>
              {reviews.length - 1 !== i && (
                <hr className={styles.hr} aria-orientation="horizontal" />
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div className={styles.noReviews}>
          <h3>No reviews yet...</h3>
        </div>
      )}
    </>
  );
};
