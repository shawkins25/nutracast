import { useEffect, useState, useRef } from "react";
import classes from "./page.module.css";
import { FaDownload, FaHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

const CustomAudioPlayer = ({
  episode,
  skipToNextEpisode,
  skipToPrevEpisode,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
      setIsRepeat(!isRepeat);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
    // Set dynamic background for volume slider fill
    const percentage = newVolume * 100;
    e.target.style.background = `linear-gradient(to right, #086c3c 0%, #086c3c ${percentage}%, #000 ${percentage}%, #000 100%)`;
  };

  const downloadEpisode = () => {
    const link = document.createElement("a");
    link.href = episode.enclosure.link;
    link.target = "_blank";
    link.rel = "noopener noreffer";
    link.download = `${episode.title}.mp3`;
    link.click();
    document.body.removeChild(link);
  };

  const handleSpeedChange = () => {
    const rates = [1, 1.5, 2, 0.75]; // You can adjust this array
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    const nextRate = rates[nextIndex];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  function removePTags(str) {
    return str.replace(/<\/?p>/g, "");
  }

  const description = removePTags(episode.description);

  return (
    <div className={classes.episode}>
      <h2 className={classes.episodeTitle}>{episode.title}</h2>
      <p className={classes.episodeDesc}>{description}</p>
      <button
        onClick={handleSpeedChange}
        className={classes.speedButton}
        aria-label="Playback Speed"
      >
        {playbackRate}x
      </button>
      <div className={classes.progressWrapper}>
        <div className={classes.progressBarContainer}>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className={classes.progressBar}
          />

          <div className={classes.timeLabels}>
            <span className={classes.progress_time}>
              {formatTime(currentTime)}
            </span>
            <span className={classes.progress_time}>
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.controls}>
        <button
          onClick={toggleShuffle}
          className={classes.controlButton}
          aria-label="Toggle Shuffle"
        >
          {isShuffle ? <FaShuffle color={"#086c3c"} /> : <FaShuffle />}
        </button>
        <button
          onClick={skipToPrevEpisode}
          className={classes.skipButton}
          aria-label="Previous Episode"
        >
          <MdSkipPrevious />
        </button>
        <button
          onClick={togglePlayback}
          className={classes.playButton}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <MdPause /> : <MdPlayArrow />}
        </button>
        <button
          onClick={skipToNextEpisode}
          className={classes.skipButton}
          aria-label="Next Episode"
        >
          <MdSkipNext />
        </button>
        <button
          onClick={toggleRepeat}
          className={classes.controlButton}
          aria-label="Toggle Repeat"
        >
          {isRepeat ? (
            <LuRepeat1 color={isRepeat ? "#086c3c" : "#1c1c1c"} />
          ) : (
            <LuRepeat />
          )}
        </button>
        <div className={classes.bottomControls}>
          <button
            onClick={downloadEpisode}
            className={classes.controlButton}
            aria-label="Like Episode"
          >
            <FaHeart />
          </button>
          <button
            onClick={downloadEpisode}
            className={classes.controlButton}
            aria-label="Download Episode"
          >
            <FaDownload />
          </button>
        </div>
      </div>
      <div className={classes.volumeWrapper}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className={classes.volumeSlider}
        />
      </div>
      <audio
        ref={audioRef}
        src={episode.enclosure.link}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default CustomAudioPlayer;
