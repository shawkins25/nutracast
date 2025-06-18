import classes from "../page.module.css";
import { memo } from "react";

const VolumeSlider = ({ volume, onVolumeChange, volumeSliderRef }) => {
  return (
    <div className={classes.volumeWrapper}>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        ref={volumeSliderRef}
        className={classes.volumeSlider}
      />
    </div>
  );
};
export default memo(VolumeSlider);
