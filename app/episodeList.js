import { FaPlus } from "react-icons/fa";
import classes from "./episodeList.module.css";

const EpisodeList = ({ episodes, onSelectEpisode }) => {

  return (
    <div className={classes.episodeList}>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode, index) => (
          <li key={episode.title?.[0]}>
            <button
              onClick={() => onSelectEpisode(index)}
              className={classes.episodeItem}
            >
              <FaPlus className={classes.icon} />
              {episode.title?.[0]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EpisodeList;
