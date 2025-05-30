"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { parseStringPromise } from "xml2js";
import classes from "./page.module.css";
import logo from "./assets/NC_Logo.webp";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import WaveRods from "./waveRods";

const JoinDiscussion = dynamic(() => import("./joinDiscussion"), {
  ssr: false,
});
const PodcastPlayer = dynamic(() => import("./podcastPlayer"), { ssr: false });

const RSS_FEED_URL = "https://feed.podbean.com/nutracast/feed.xml";

export default function Home() {
  const [episodes, setEpisodes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

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

  const skipToNextEpisode = useCallback(
    (mode = "next") => {
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
    },
    [episodes]
  );

  const skipToPrevEpisode = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3.5) {
      audio.currentTime = 0;
    } else {
      setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
    }
  }, [audioRef]);

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.logo}></div>
        <div className={classes.header}>
          <Link href="https://www.nutramaxlabs.com/" target="_blank">
            <div className={classes.logo_container}>
              <Image src={logo} alt={"Logo"} fill priority />
            </div>
          </Link>
          <p>MINISTERING | EQUIPPING | INSTRUCTING</p>
        </div>
        <div className={classes.section_container}>
          {/* Join Discussion - will be left on desktop, bottom on mobile */}
          <div className={`${classes.section} ${classes.joinDiscussion}`}>
            <JoinDiscussion />
          </div>
          {/* Audio Player */}
          <div className={`${classes.section} ${classes.audioPlayer}`}>
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
                  audioRef={audioRef}
                />
              )
            )}
          </div>
          {/* Episode List */}
          <div className={`${classes.section} ${classes.episodesList}`}>
            {isLoading ? (
              <div className={classes.spinnerWrapper}>
                <div className={classes.spinner}></div>
              </div>
            ) : (
              episodes.length > 0 && (
                <PodcastPlayer
                  type="list"
                  episodes={episodes}
                  episode={episodes[currentIndex]}
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
      <WaveRods />
    </div>
  );
}
