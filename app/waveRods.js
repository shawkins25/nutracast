import classes from "./waveRods.module.css";
import { useEffect, useState } from "react";

const MAX_HEIGHT = 100; // max rod height in px
const MIN_HEIGHT = 40; // min rod height in px

export default function WaveRods() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1200);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const numRods = isMobile ? 25 : 75;

  return (
    <div className={classes.waveContainer}>
      {Array.from({ length: numRods }).map((_, i) => {
        const waveHeight = isMobile
          ? MIN_HEIGHT +
            (MAX_HEIGHT - MIN_HEIGHT) *
              (0.5 + 0.5 * Math.sin((i / numRods) * Math.PI * 2))
          : 80;
        const style = {
          height: `${waveHeight}px`,
          ...(isMobile ? {} : { animationDelay: `${i * 0.05}s` }),
        };
        return <div key={i} className={classes.rod} style={style} />;
      })}
    </div>
  );
}
