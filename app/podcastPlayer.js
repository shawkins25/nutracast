import { useEffect, useState } from "react";
import { parseStringPromise } from "xml2js";
import CustomAudioPlayer from "./customAudioPlayer";
import EpisodeList from "./episodeList";
import classes from "./page.module.css";

const RSS_FEED_URL = "https://feed.podbean.com/nutracast/feed.xml";

const PodcastPlayer = ({ showList = false }) => {
  const [episodes, setEpisodes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await fetch(RSS_FEED_URL);
        const xml = await res.text();
        const parsed = await parseStringPromise(xml);
        const items = parsed.rss.channel[0].item;
        setEpisodes(items);
      } catch (err) {
        console.error("Failed to fetch or parse RSS feed:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeed();
  }, []);

  const skipToNextEpisode = (mode = "next", randomSeed) => {
    setCurrentIndex((prev) => {
      if (mode === "shuffle") {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * episodes.length);
        } while (newIndex === prev && episodes.length > 1); // Avoid repeat
        return newIndex;
      }
      return (prev + 1) % episodes.length;
    });
  };

  const skipToPrevEpisode = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  return (
    <div className={classes.episodesWrapper}>
      {isLoading ? (
        <div className={classes.spinnerWrapper}>
          <div className={classes.spinner}></div>
        </div>
      ) : (
        <>
          {!showList && episodes.length > 0 && (
            <CustomAudioPlayer
              episode={episodes[currentIndex]}
              skipToNextEpisode={skipToNextEpisode}
              skipToPrevEpisode={skipToPrevEpisode}
            />
          )}
          {showList && <EpisodeList episodes={episodes} />}
        </>
      )}
    </div>
  );
};
export default PodcastPlayer;
