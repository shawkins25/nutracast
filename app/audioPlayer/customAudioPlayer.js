import { useEffect, useState, useRef } from "react";
import classes from "../page.module.css";
import ProgressDisplay from "./progressDisplay";
import PlayerControls from "./playerControls";
import VolumeSlider from "./volumeSlider";
import { useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';

const CustomAudioPlayer = ({
  episode,
  skipToNextEpisode,
  skipToPrevEpisode,
  audioRef
}) => {

  const volumeSliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);

  const title = useMemo(() => episode.title?.[0] ?? "", [episode]);
const description = useMemo(() => (episode.description?.[0] ?? "").replace(/<\/?p>/g, ""), [episode]);
const audioSrc = useMemo(() => episode.enclosure?.[0]?.$?.url ?? "", [episode]);

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
        await audio.play();
      } catch (err) {
        console.warn("Autoplay blocked:", err);
      }
    };
    tryPlay();
  }, [episode]);

  useEffect(() => {
    if (volumeSliderRef.current) {
      const pct = volume * 100;
      volumeSliderRef.current.style.background = `linear-gradient(to right, #086c3c 0%, #086c3c ${pct}%, #000 ${pct}%, #000 100%)`;
    }
  }, [volume]);

  const handleSeek = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolume = useCallback(
    debounce((e) => {
      const newVolume = parseFloat(e.target.value);
      if (audioRef.current) audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }, 100),
    []
  );

  const handleSpeedChange = () => {
    const rates = [1, 1.5, 2, 0.75];
    const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  return (
    <div className={classes.episode}>
      <h2 className={classes.episodeTitle}>
        <span>{title}</span>
      </h2>
      <p className={classes.episodeDesc}>{description}</p>
      <button
        onClick={handleSpeedChange}
        className={classes.speedButton}
        aria-label="Playback Speed"
      >
        {playbackRate}x
      </button>
      <ProgressDisplay
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <PlayerControls
        isShuffle={isShuffle}
        setIsShuffle={setIsShuffle}
        isRepeat={isRepeat}
        setIsRepeat={setIsRepeat}
        skipToNextEpisode={skipToNextEpisode}
        skipToPrevEpisode={skipToPrevEpisode}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        episode={episode}
        audioRef={audioRef}
      />
      <VolumeSlider
        volume={volume}
        onVolumeChange={handleVolume}
        volumeSliderRef={volumeSliderRef}
      />
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onEnded={() => {
          isShuffle ? skipToNextEpisode("shuffle") : skipToNextEpisode();
        }}
      />
    </div>
  );
};
export default CustomAudioPlayer;
