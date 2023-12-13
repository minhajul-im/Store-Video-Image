import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovieDetails } from "../features/index";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(994108));
  }, [dispatch]);

  if (movieDetails === null) return <h1>fetching......</h1>;

  console.log(movieDetails);
  console.log("hello");

  return <div>Hello</div>;
}
