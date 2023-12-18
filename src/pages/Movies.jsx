import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

import {
  fetchUpComing,
  fetchPopularMovie,
  fetchTopRatedMovie,
} from "../features/index";

export default function Browse() {
  const dispatch = useDispatch();

  const { popularMovie } = useSelector((state) => state.popularMovie);
  const { upComingMovie } = useSelector((state) => state.movieUpComing);
  const { topRatedMovie } = useSelector((state) => state.topRatedMovie);

  useEffect(() => {
    dispatch(fetchUpComing());
    dispatch(fetchPopularMovie());
    dispatch(fetchTopRatedMovie());
  }, [dispatch]);

  if (
    upComingMovie === null ||
    popularMovie === null ||
    topRatedMovie === null
  ) {
    return <h1>fetching........</h1>;
  }

  return (
    <>
      <Hero hero={upComingMovie?.results} />

      <MovieRow title={"Up Coming"} movies={upComingMovie?.results} />
      <MovieRow title={"Popular"} movies={popularMovie?.results} />
      <MovieRow title={"Top Rated"} movies={topRatedMovie?.results} />
    </>
  );
}
