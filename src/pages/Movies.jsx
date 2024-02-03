import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/movie/Hero";
import MoviesRow from "../components/movie/MoviesRow";

import {
  fetchUpComing,
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchNowPlayingMovie,
} from "../features/movie/index";

export default function Browse() {
  const dispatch = useDispatch();

  const { popularMovie } = useSelector((state) => state.popularMovie);
  const { upComingMovie } = useSelector((state) => state.movieUpComing);
  const { topRatedMovie } = useSelector((state) => state.topRatedMovie);
  const { nowPlayingMovie } = useSelector((state) => state.nowPlayingMovie);

  useEffect(() => {
    dispatch(fetchUpComing());
    dispatch(fetchPopularMovie());
    dispatch(fetchTopRatedMovie());
    dispatch(fetchNowPlayingMovie());
  }, [dispatch]);

  if (
    popularMovie === null ||
    topRatedMovie === null ||
    upComingMovie === null ||
    nowPlayingMovie === null
  ) {
    return <h1>fetching........</h1>;
  }

  return (
    <>
      <Hero hero={upComingMovie?.results || popularMovie?.results} />

      <MoviesRow title={"Up Coming"} movies={upComingMovie?.results} />
      <MoviesRow title={"Popular"} movies={popularMovie?.results} />
      <MoviesRow title={"Top Rated"} movies={topRatedMovie?.results} />
      <MoviesRow title={"Now Playing"} movies={nowPlayingMovie?.results} />
    </>
  );
}
