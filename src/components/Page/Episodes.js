import React, { useRef, useState } from "react";
import tr from "../Videos/tr.mp4";
import haikyu1 from "../haikyu/haikyu1.jpg";
import haikyu2 from "../haikyu/haikyu2.jpg";
import haikyu3 from "../haikyu/haikyu3.jpg";
import haikyu4 from "../haikyu/haikyu4.jpg";
import haikyu5 from "../haikyu/haikyu5.jpg";
import haikyu6 from "../haikyu/haikyu6.jpg";

import haikyu7 from "../haikyu/haikyu7.jpg";

import "./episode.css";

function VideoPage() {
  const haikyu_im = [
    haikyu1,
    haikyu2,
    haikyu3,
    haikyu4,
    haikyu5,
    haikyu6,
    haikyu7,
  ];
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="video_episode">
        <video
          ref={videoRef}
          onClick={onVideoPress}
          className="videoCard_player"
          src={tr}
          alt="IG reel video"
          loop
          style={{
            width: "100vw",
            height: "75vh",
          }}
          controls
        />
      </div>

      <div>
        <div className="head">Anime Haikyu Season 1</div>

        <div className="season">Season ! | PG-13 | April 2014</div>

        <div className="detail">
          <div className="details">
            <div className="details_list">
              <div className="list">Type</div>

              <div className="type">TV Serial</div>
            </div>

            <div className="details_list">
              <div className="list">Episodes</div>
              <div className="type">25</div>
            </div>

            <div className="details_list">
              <div className="list">Status</div>
              <div className="type">Came OUt</div>
            </div>

            <div className="details_list">
              <div className="list">The original source</div>
              <div className="type">Manga</div>
            </div>

            <div className="details_list">
              <div className="list">Season</div>
              <div className="type">April 2014</div>
            </div>

            <div className="details_list">
              <div className="list">Release</div>
              <div className="type">
                From April 6, 2014 to September 21,2014
              </div>
            </div>

            <div className="details_list">
              <div className="list">Studio</div>
              <div className="type">Proudution I.G</div>
            </div>
          </div>
        </div>

        <div className="desc">
          Shoyo Hinata decides to take up volleyball seriously after watching
          this game serveral times. Now he is fulfilling his dream by creating a
          real volleyball team. Three years later they achieve a hitherto
          unprecendented success for themselves. they get to a major sports
          tournament. Despite teh lack of experience, Hinata hopes for success.
          But they are unlucky with the draw, and in the first round the team
          will have to play with a strong team. The playmaker of this team
          almost single-handedly defeats the opponent. After such a defeat,
          Hinata hopes for a rematch.
        </div>
      </div>

      <div>
        <div className="watc">Watch the anime Haikyu!! online</div>
        <div></div>
        <div>
          <div className="haikyu">
            <img src={haikyu_im[index]} alt="" className="hai" />
            <div className="num">
              <div className="number" onClick={(e) => setIndex(0)}>
                1
              </div>
              <div className="number" onClick={(e) => setIndex(1)}>
                2
              </div>
              <div className="number" onClick={(e) => setIndex(2)}>
                3
              </div>
              <div className="number" onClick={(e) => setIndex(3)}>
                4
              </div>
              <div className="number" onClick={(e) => setIndex(4)}>
                5
              </div>
              <div className="number" onClick={(e) => setIndex(5)}>
                6
              </div>
              <div className="number" onClick={(e) => setIndex(6)}>
                7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
