import React from 'react'
import { Anime, createPuppeteerInstance } from "9anime";


async function Anilist() {

  const puppeteerInstance = await createPuppeteerInstance();

const anime = new Anime(puppeteerInstance);

// Destructure and get the first show in the search results
const [show] = await anime.search("jojo");

// Destructure and get the first episode of that show
const [episode] = await anime.getEpisodes(show.url);

// Get the video url for the selected episode
const { video } = await anime.getVideo(episode.url);
console.log(video);

// Close puppeteer and free resources
anime.close();
  return (
    <div>
      
    </div>
  )
}

export default Anilist
