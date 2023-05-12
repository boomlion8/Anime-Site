import React from "react";
import bluelock from "./bluelock.jpg";
import tokyo from "./tokyo revenger.jpg";
import demonslayer from "./demonslayer.jpg";
import jjk from "./jjk.jpg";
import "./popular.css";
function Popular() {
  const images = [bluelock, tokyo, demonslayer, jjk];
  return (
    <div>
      <div className="popular_component">
        {images.map((i) => (
          <div>
            <img src={i} alt="" className="popular_image" />
          </div>
        ))}
      </div>

    
    </div>
  );
}

export default Popular;
