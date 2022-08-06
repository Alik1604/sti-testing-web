import styles from "../styles/Line.module.scss";
import flag from "../img/flag.png";
import { useEffect, useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return width >= 600 ? (
    <header className={styles.header}>
      <div className={styles.ticker_wrapper_first_half}>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
      </div>
      <div className={styles.ticker_wrapper_second_half}>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
      </div>
    </header>
  ) : (
    <header className={styles.header}>
      <div className={styles.ticker_wrapper_first_half}>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
      </div>
      <div className={styles.ticker_wrapper_second_half}>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
        <img src={flag} alt="BorisCooper" />
        <p className={styles.text}>We ship inside the US only</p>
      </div>
    </header>
  );
}
