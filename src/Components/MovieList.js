import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const {movies} = useSelector((state) => state.movieReducer);
  return (
    <div>
      {movies.map((el) => (
        <MovieCard movieInfo={el} />
      ))}
    </div>
  );
};

export default MovieList;
