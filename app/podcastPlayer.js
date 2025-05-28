import CustomAudioPlayer from "./audioPlayer/customAudioPlayer";
import EpisodeList from "./episodeList";
import classes from "./page.module.css";

const PodcastPlayer = ({
  type = "player",
  episode,
  episodes = [],
  skipToNextEpisode,
  skipToPrevEpisode,
  onSelectEpisode,
}) => {
  if (type === "player") {
    return (
      <div className={classes.episodesWrapper}>
        <CustomAudioPlayer
          episode={episode}
          skipToNextEpisode={skipToNextEpisode}
          skipToPrevEpisode={skipToPrevEpisode}
        />
      </div>
    );
  }
  if (type === "list") {
    return (
      <div className={classes.episodesWrapper}>
        <EpisodeList episodes={episodes} onSelectEpisode={onSelectEpisode} />
      </div>
    );
  }
  return null;
};
export default PodcastPlayer;
