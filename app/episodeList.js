import { FaPlus } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import classes from "./episodeList.module.css";
import { memo } from 'react';

const EpisodeList = ({
  episode: currentEpisode,
  episodes,
  onSelectEpisode,
}) => {
  return (
    <div className={classes.episodeList}>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((ep, index) => {
          const isActive = ep.title?.[0] === currentEpisode?.title?.[0];
          return (
            <li key={ep.title?.[0]}>
              <button
                onClick={() => onSelectEpisode(index)}
                className={`${classes.episodeItem} ${
                  isActive ? classes.activeEpisode : ""
                }`}
              >
                {isActive ? (
                  <BsSoundwave className={classes.soundwave_icon} />
                ) : (
                  <FaPlus className={classes.icon} />
                )}
                {ep.title?.[0]}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(EpisodeList);
