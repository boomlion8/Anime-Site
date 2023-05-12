import React from "react";
import { useRef } from "react";
import { useState } from "react";

import "./videoCard.css";

function VideoCard({ value }) {
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

  // const playVideo = () => {
  //   videoRef.current.play();
  //   setIsVideoPlaying(true);
  // };

  // const pauseVideo = () => {
  //   videoRef.current.pause();
  //   setIsVideoPlaying(false);
  // };

  return (
    <div className="video_card">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard_player"
        src={value}
        alt="IG reel video"
        loop
        style={{
          opacity: "100%",
          width: "300px",
          height: "300px",
          padding: "20px",
        }}
      />
    </div>
  );
}

export default VideoCard;
