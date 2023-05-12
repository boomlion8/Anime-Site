import React, { useRef, useState } from "react";
import "./Contentpage.css";
import Popular from "./Popular";
import jjk from "../Videos/jk.mp4";
import haikyu from "./haikyu.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Contentpage() {
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
  return (
    <div className="component">
      <div className="component_wrapper">
        <div className="component_text">
          <div className="header_about">About Anime</div>
          <p className="text">
            Haikyuu!! anime about volleyball, released by the studio Production
            I.G, which, by the way, ate a dog on the sports genre: she
            previously released Kuroko no Basket about basketball, Prince of
            Tennis about tennis and Diamond no Ace about baseball. The script is
            based on manga. Shoyo Hinata decides to take up volleyball seriously
            after watching this game serveral times. Now he is fulfilling his
            dream by creating a real volleyball team. Three years later they
            achieve a hitherto unprecendented success for themselves. they get
            to a major sports tournament. Despite teh lack of experience, Hinata
            hopes for success. But they are unlucky with the draw, and in the
            first round the team will have to play with a strong team. The
            playmaker of this team almost single-handedly defeats the opponent.
            After such a defeat, Hinata hopes for a rematch.
          </p>
        </div>
        <div className="component_image">
          <img src={haikyu} alt="" className="haikyu_image" />
        </div>
      </div>

      <div className="component_wrap">
        <div className="popular ">Popular</div>
      </div>

      <div>
        <Popular />
      </div>

      <div>
        <div>
          <div className="popular ">Watch Now</div>
        </div>
        <div className="play_video">
          <video
            ref={videoRef}
            onClick={onVideoPress}
            className="videoCard_player"
            src={jjk}
            alt="IG reel video"
          />
          <div className="play_video_icon">
            <PlayCircleIcon fontSize="large" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contentpage;
