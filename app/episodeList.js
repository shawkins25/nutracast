import classes from "./episodeList.module.css";
const EpisodeList = ({ episodes }) => {
  return (
    <div className={classes.episodeList}>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.guid}>
            <a href={episode.link} target="_blank" rel="noopener noreferrer">
              {episode.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EpisodeList;
