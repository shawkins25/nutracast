import { FaHeart, FaDownload } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";
import { memo } from "react";
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import classes from "../page.module.css";

const PlayerControls = ({
  isShuffle,
  setIsShuffle,
  isRepeat,
  setIsRepeat,
  skipToPrevEpisode,
  skipToNextEpisode,
  isPlaying,
  setIsPlaying,
  isLiked,
  setIsLiked,
  episode,
  audioRef,
}) => {
  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
      setIsRepeat(!isRepeat);
    }
  };

  const toggleShuffle = () => setIsShuffle(!isShuffle);

  const downloadEpisode = () => {
    const url = episode.enclosure?.[0]?.$?.url ?? "#";
    const title = episode.title?.[0] ?? "episode";
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={classes.controls}>
      <button onClick={toggleShuffle} className={classes.controlButton}>
        <FaShuffle color={isShuffle ? "#086c3c" : undefined} />
      </button>
      <button onClick={skipToPrevEpisode} className={classes.skipButton}>
        <MdSkipPrevious />
      </button>
      <button onClick={togglePlayback} className={classes.playButton}>
        {isPlaying ? <MdPause /> : <MdPlayArrow />}
      </button>
      <button
        onClick={() =>
          isShuffle ? skipToNextEpisode("shuffle") : skipToNextEpisode()
        }
        className={classes.skipButton}
      >
        <MdSkipNext />
      </button>
      <button onClick={toggleRepeat} className={classes.controlButton}>
        {isRepeat ? <LuRepeat1 color="#086c3c" /> : <LuRepeat />}
      </button>
      <div className={classes.bottomControls}>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`${classes.controlButton} ${isLiked ? classes.liked : ""}`}
        >
          <FaHeart />
        </button>
        <button onClick={downloadEpisode} className={classes.controlButton}>
          <FaDownload />
        </button>
      </div>
    </div>
  );
};
export default memo(PlayerControls);
