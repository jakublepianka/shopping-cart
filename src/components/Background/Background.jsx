import styles from "./Background.module.css";
import bgSmall from "../../assets/background/bg-small.jpeg";
import bgFull from "../../assets/background/bg-full.jpeg";

export const Background = () => {
  return (
    <img 
      src={bgSmall}
      loading="lazy"
      srcSet={`${bgSmall} 1024w, ${bgFull} 1408w`}
      sizes="(max-width: 599px) 100vw, 1408px"
      className={styles.bgImg} 
      alt="smartphone and accessories on tealish background"
    />
  );
};