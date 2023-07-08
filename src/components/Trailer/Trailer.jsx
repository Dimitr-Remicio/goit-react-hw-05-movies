import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieTrailer } from "../../Service/api";
import ReactPlayer from "react-player";

import s from "./Trailer.module.css";

export default function Trailer() {
  const { movieId } = useParams();
  const [video, setVideo] = useState([]);
  console.log(video);

  useEffect(() => {
    fetchMovieTrailer(movieId).then((data) => {
      setVideo(data.results);
    });
  }, [movieId]);

  const BASE_VIDEO = "https://www.youtube.com/watch?v=";

  return (
    video.length > 0 ? (<div>
        {video.slice(0, 5).map(({ key, id, name }) => {
            return <div key={id}>
              <h1>{name}</h1>
              <ReactPlayer url={`${BASE_VIDEO}${key}`}width="100%" height="600px" controls />
          </div>
        })}
    </div>)
    : <p>no items found</p>
 )      

  
}
