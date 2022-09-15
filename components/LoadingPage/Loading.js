import CPressed from "/assets/CPressed.svg";
import HPressed from "/assets/HPressed.svg";
import APressed from "/assets/APressed.svg";
import PPressed from "/assets/PPressed.svg";
import RedBirdPressed from "/assets/RedBirdPressed.svg";
import CIdle from "/assets/CIdle.svg";
import HIdle from "/assets/HIdle.svg";
import AIdle from "/assets/AIdle.svg";
import PIdle from "/assets/PIdle.svg";
import RedBirdIdle from "/assets/RedBirdIdle.svg";
import styles from "../../styles/Components/Loading/Loading.module.css";

import { useEffect, useState, useRef } from "react";

export default function LoadingPage() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const interval = useRef();

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(() => Date.now() - startTime);
    }, 1);
  });

  return (
    <div className={styles.container}>
      {time > 1000 && time < 1500 ? (
        <CPressed className={styles.key} />
      ) : (
        <CIdle className={styles.key} />
      )}
      {time > 1600 && time < 2100 ? (
        <HPressed
          className={styles.key}
        />
      ) : (
        <HIdle
          className={styles.key}
        />
      )}
      {time > 2200 && time < 2700 ? (
        <APressed
          className={styles.key}
        />
      ) : (
        <AIdle
          className={styles.key}
        />
      )}
      {time > 2800 && time < 3200 ? (
        <PPressed
          className={styles.key}
        />
      ) : (
        <PIdle
          className={styles.key}
        />
      )}
      {time > 3200 && time < 3700 ? (
        <RedBirdPressed
          className={styles.key}
        />
      ) : (
        <RedBirdIdle
          className={styles.key}
        />
      )}
    </div>
  );
}
