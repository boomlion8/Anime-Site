import React from "react";
import axios from "axios";
import "./animelist.css";
import { useEffect, useState } from "react";

function Animelist() {
  const [value, setValue] = useState([]);

  function fetchData() {
    axios.get("https://api.jikan.moe/v4/anime").then(function (response) {
      setValue(response.data.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(value);

  return (
    <div className="api_data">
      {value.map((v, i) => (
        
        <div className="left_side">
          <div>
            <img src={v.images.jpg.image_url} alt="" key={i} />
          </div>
          <div className="right_side">
            <div className="details_list">
              <div className="list">Anime</div>
              <div className="type">{v.title}</div>
            </div>
            <div className="details_list">
              <div className="list">aired</div>
              <div className="type"> {v.aired.string}</div>
            </div>
            <div className="details_list">
              {" "}
              <div className="list">Rating</div>
              <div className="type">{v.rating}</div>
            </div>
            <div className="details_list">
              <div className="list">Ranking</div>
              <div className="type">{v.rank}</div>
            </div>
            <div className="details_list">
              <div className="list">Genres</div>
              <div className="type">
                {v.genres.map((m) => (
                  <div>{m.name}</div>
                ))}
              </div>
            </div>
            <div className="details_list">
              <div className="list">Details</div>
              <div className="type">{v.background}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Animelist;
