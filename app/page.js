"use client";

import { useEffect, useState } from "react";
import { parseStringPromise } from "xml2js";
import JoinDiscussion from "./joinDiscussion";
import PodcastPlayer from "./podcastPlayer";
import classes from "./page.module.css";
import logo from "./assets/NC_Logo.webp";
import Image from "next/image";

const RSS_FEED_URL = "https://feed.podbean.com/nutracast/feed.xml";

export default function Home() {
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

  const skipToNextEpisode = (mode = "next") => {
    setCurrentIndex((prev) => {
      if (mode === "shuffle") {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * episodes.length);
        } while (newIndex === prev && episodes.length > 1);
        return newIndex;
      }
      return (prev + 1) % episodes.length;
    });
  };

  const skipToPrevEpisode = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

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
          {/* ✅ Section 2: Only audio player */}
          <div className={classes.section}>
            {isLoading ? (
              <div className={classes.spinnerWrapper}>
                <div className={classes.spinner}></div>
              </div>
            ) : (
              episodes.length > 0 && (
                <PodcastPlayer
                  type="player"
                  episode={episodes[currentIndex]}
                  skipToNextEpisode={skipToNextEpisode}
                  skipToPrevEpisode={skipToPrevEpisode}
                />
              )
            )}
          </div>
          {/* ✅ Section 3: Just the list */}
          <div className={classes.section}>
            {isLoading ? (
              <div className={classes.spinnerWrapper}>
                <div className={classes.spinner}></div>
              </div>
            ) : (
              episodes.length > 0 && (
                <PodcastPlayer
                  type="list"
                  episodes={episodes}
                  onSelectEpisode={(index) => setCurrentIndex(index)}
                />
              )
            )}
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
