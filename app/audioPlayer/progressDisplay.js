import classes from "../page.module.css";

const ProgressDisplay = ({ currentTime, duration, onSeek }) => {
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = String(Math.floor(time % 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={classes.progressWrapper}>
      <div className={classes.progressBarContainer}>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          className={classes.progressBar}
        />
        <div className={classes.timeLabels}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};
export default ProgressDisplay;
