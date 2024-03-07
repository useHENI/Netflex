import { useState, useEffect } from "react";
import "./banner.css";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
 // console.log(movie);
function truncate(str, n){
  return str?.length > n ? str.substr(0, n) + "..." : str; 
}
// for minmaiz dictibtion text

  return (
    <header className="banner" 
    style={{
      backgroundSize: "cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundposition: "center center"
    }}>

      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
          <h1 className="banner_discription">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
      
    </header>
  );
}

export default Banner;
