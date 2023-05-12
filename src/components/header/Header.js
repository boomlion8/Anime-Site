import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header_nav">
      <div className="header1">Anime Site</div>
      <div className="header2">
        <div className="title" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="title" onClick={() => navigate("/anime")}>
          Anime
        </div>
        <div className="title" onClick={() => navigate("/episode")}>
          Episodes
        </div>
        <div className="title" onClick={() => navigate("/trailer")}>
          Trailer
        </div>
      </div>

      <div className="header4">
        <div className="icons">
          <NotificationsNoneIcon />
        </div>
        <div className="icons">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
