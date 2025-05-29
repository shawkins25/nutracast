import classes from "./page.module.css";
import dynamic from "next/dynamic";
import { memo } from 'react';

const CustomAudioPlayer = dynamic(
  () => import("./audioPlayer/customAudioPlayer"),
  { ssr: true }
);
const EpisodeList = dynamic(() => import("./episodeList"), { ssr: true });

const PodcastPlayer = ({
  type = "player",
  episode,
  episodes = [],
  skipToNextEpisode,
  skipToPrevEpisode,
  onSelectEpisode,
  audioRef,
}) => {
  if (type === "player") {
    return (
      <div className={classes.episodesWrapper}>
        <CustomAudioPlayer
          episode={episode}
          skipToNextEpisode={skipToNextEpisode}
          skipToPrevEpisode={skipToPrevEpisode}
          audioRef={audioRef}
        />
      </div>
    );
  }
  if (type === "list") {
    return (
      <div className={classes.episodesWrapper}>
        <EpisodeList
          episode={episode}
          episodes={episodes}
          onSelectEpisode={onSelectEpisode}
        />
      </div>
    );
  }
  return null;
};

export default memo(PodcastPlayer);
