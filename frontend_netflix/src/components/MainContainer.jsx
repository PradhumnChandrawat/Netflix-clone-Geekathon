import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;

  const { overview, id, title } = movies[3];
  // console.log(id);


  return (
    <>
      <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </>
  );
};

export default MainContainer;
