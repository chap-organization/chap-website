import CPressed from "./Images/CPressed.svg";
import HPressed from "./Images/HPressed.svg";
import APressed from "./Images/APressed.svg";
import PPressed from "./Images/PPressed.svg";
import RedBirdPressed from "./Images/RedBirdPressed.svg";
import CIdle from "./Images/CIdle.svg";
import HIdle from "./Images/HIdle.svg";
import AIdle from "./Images/AIdle.svg";
import PIdle from "./Images/PIdle.svg";
import RedBirdIdle from "./Images/RedBirdIdle.svg";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {time > 1000 && time < 1500 ? (
        <CPressed
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      ) : (
        <CIdle
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      )}
      {time > 1600 && time < 2100? (
        <HPressed
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      ) : (
        <HIdle
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      )}
      {time > 2200 && time < 2700 ? (
        <APressed
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      ) : (
        <AIdle
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      )}
      {time >  2800 && time <  3200 ? (
        <PPressed
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      ) : (
        <PIdle
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      )}
      {time > 3200 && time < 3700 ? (
        <RedBirdPressed
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      ) : (
        <RedBirdIdle
          style={{ marginTop: "auto", marginBottom: "auto", width: "10%" }}
        />
      )}
    </div>
  );
}
