import React from "react";
import TextField from "@mui/material/TextField";
import "./bottombar.css";
import haikyu from "../haikyu/haik.png";
function Bottombar() {
  return (
    <div className="bottombar">
      <div className="bottombar_left">
        <div>
          <div className="welcome">Welcome to the Haikyu World!</div>
          <div className="email">
            Enter your email address to receive notifications about new episodes
          </div>
          <div className="subscribe_bar">
            <div>
              <TextField />
            </div>
            <div className="subscribe-button">Subscribe</div>
          </div>
        </div>
      </div>

      <div className="bottombar_right">
        <div>
          <img src={haikyu} alt="" className="haikyu_imag" />
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
