import React, { useEffect, useState } from "react";
import "./trailer.css";
import axios from "axios";
import ReactPlayer from "react-player";

function Trailer() {
  const [value, setValue] = useState([]);

  function fetchData() {
    axios.get("https://api.jikan.moe/v4/anime").then(function (response) {
      setValue(response.data.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
     
      {value.map((v, i) => (
        <div>
          <div>
            <ReactPlayer url={v.trailer.embed_url} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trailer;
