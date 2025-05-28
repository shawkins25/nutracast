"use client";

import JoinDiscussion from "./joinDiscussion";
import PodcastPlayer from "./podcastPlayer";
import classes from "./page.module.css";
import logo from "./assets/NC_Logo.webp";
import Image from "next/image";

export default function Home() {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.logo}></div>
        <div className={classes.header}>
          <div className={classes.logo_container}>
            <Image src={logo} alt={"Logo"} fill priority />
          </div>
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
            {/* Episode List Here */}
            <PodcastPlayer showList />
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
