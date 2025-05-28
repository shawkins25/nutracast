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
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = playbackRate;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [playbackRate]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const tryPlay = async () => {
      try {
        audio.currentTime = 0;
        await audio.play(); // play event will update isPlaying
      } catch (err) {
        console.warn("Autoplay blocked by browser on episode change:", err);
      }
    };
    tryPlay();
  }, [episode]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => setIsShuffle(!isShuffle);

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
    const percentage = newVolume * 100;
    e.target.style.background = `linear-gradient(to right, #086c3c 0%, #086c3c ${percentage}%, #000 ${percentage}%, #000 100%)`;
  };

  const downloadEpisode = () => {
    const audioUrl = episode.enclosure?.[0]?.$?.url ?? "#";
    const title = episode.title?.[0] ?? "episode";
    const link = document.createElement("a");
    link.href = audioUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = `${title}.mp3`;
    link.click();
    document.body.removeChild(link);
  };

  const handleSpeedChange = () => {
    const rates = [1, 1.5, 2, 0.75];
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

  const removePTags = (str) => str.replace(/<\/?p>/g, "");

  const title = episode.title?.[0] ?? "";
  const description = removePTags(episode.description?.[0] ?? "");
  const audioSrc = episode.enclosure?.[0]?.$?.url ?? "";

  return (
    <div className={classes.episode}>
      <h2 className={classes.episodeTitle}>{title}</h2>
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
          onClick={() => {
            if (isShuffle) {
              skipToNextEpisode("shuffle");
            } else {
              skipToNextEpisode();
            }
          }}
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
          {isRepeat ? <LuRepeat1 color={"#086c3c"} /> : <LuRepeat />}
        </button>
        <div className={classes.bottomControls}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`${classes.controlButton} ${
              isLiked ? classes.liked : classes.notLiked
            }`}
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
        src={audioSrc}
        preload="metadata"
        onEnded={() => {
          if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * 100000);
            skipToNextEpisode("shuffle", randomIndex);
          } else {
            skipToNextEpisode();
          }
        }}
      />
    </div>
  );
};
export default CustomAudioPlayer;
