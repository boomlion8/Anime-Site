import React from "react";
//import VideoCard from "../Video/VideoCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./middlebar.css";
import VideoCard from "../Video/VideoCard";

import video1 from "../Videos/tr.mp4";
import video2 from "../Videos/mha.mp4";
import video3 from "../Videos/aot.mp4";

function Middlebar() {
  const videos = [video1, video2, video3];
  return (
    <div>
      <div className="middlebar">
        <div className="middlebar_item">
          <div className="header_name">Anime Haikyu!!</div>

          <div className="middlebar2">
            Shoyo Hinata decides to take up volleyball seriously after watching
            this game serveral times. Now he is fulfilling his dreams by
            creating a real volleyball team.
          </div>

          <div className="right">
            <div className="watch-button">Watch Now</div>
            <div className="arrow">
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="rating_bottom">
        <div className="bottom_item">
          <div className="bottom_list_item">
            <div>Rating</div>
            <div className="star_icon">
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>

          <div className="bottom_list_item">
            <div>Genre</div>
            <div>Drama, Comedy, Sport, School</div>
          </div>

          <div className="bottom_list_item">
            <div>Studio</div>
            <div>Production I.G.</div>
          </div>

          <div className="videoPlayer">
            {videos.map((value) => (
              <VideoCard value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middlebar;
