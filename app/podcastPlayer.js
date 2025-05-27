import CustomAudioPlayer from "./customAudioPlayer";
import { useEffect, useState } from "react";
import classes from "./page.module.css";

const PODCAST_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://feed.podbean.com/nutracast/feed.xml";

const PodcastPlayer = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch(PODCAST_FEED_URL);
        const data = await res.json();
        setEpisodes(data.items || []);
      } catch (err) {
        console.error("Failed to load podcast feed:", err);
      }
    };
    fetchEpisodes();
  }, []);

  const skipToNextEpisode = () => {
    setCurrentIndex((prev) => (prev + 1) % episodes.length);
  };
  const skipToPrevEpisode = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  return (
    <div className={classes.episodesWrapper}>
      {episodes.map((episode) => (
        <CustomAudioPlayer
          key={episode.guid}
          episode={episodes[currentIndex]}
          skipToNextEpisode={skipToNextEpisode}
          skipToPrevEpisode={skipToPrevEpisode}
        />
      ))}
    </div>
  );
};

export default PodcastPlayer;
