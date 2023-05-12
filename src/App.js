import Home from "./Home";
//import VideoPage from "./components/Page/VideoPage";
//import VideoPage from "./components/Page/VideoPage";

// import axios from "axios";
//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./components/Page/Episodes";
import Animelist from "./components/Animelist/Animelist";
import Header from "./components/header/Header";
import Trailer from "./components/Trailer/Trailer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/episode"
          element={
            <>
              <Header />
              <VideoPage />
            </>
          }
        />
        <Route
          path="/anime"
          element={
            <>
              <Header />
              <Animelist />
            </>
          }
        />
        <Route
          path="/trailer"
          element={
            <>
              <Header />
              <Trailer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
