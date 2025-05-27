"use client";

import JoinDiscussion from "./joinDiscussion";
import classes from "./page.module.css";
import PodcastPlayer from "./podcastPlayer";

export default function Home() {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.logo}></div>
        <div className={classes.header}>
          <img src="#" />
          <h1>NUTRACAST</h1>
          <p>MINISTERING | EQUIPPING | INSTRUCTING</p>
        </div>
        <div className={classes.section_container}>
          <div className={classes.section}>
            <JoinDiscussion />
          </div>
          <div className={classes.section}>
            <PodcastPlayer />
          </div>
          <div className={classes.section}>
            
          </div>
        </div>
        <div className={classes.socials_container}>
          <a href="#">
            <img src="#" />
          </a>
          <a href="#">
            <img src="#" />
          </a>
          <a href="#">
            <img src="#" />
          </a>
        </div>
      </div>
    </div>
  );
}
