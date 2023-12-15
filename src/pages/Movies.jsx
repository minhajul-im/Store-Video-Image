import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Hero, MovieRow } from "../components/index";

import {
  fetchUpComing,
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchNowPlayingMovie,
} from "../features/index";

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

      <MovieRow title={"Up Coming"} movies={upComingMovie?.results} />
      <MovieRow title={"Popular"} movies={popularMovie?.results} />
      <MovieRow title={"Top Rated"} movies={topRatedMovie?.results} />
      <MovieRow title={"Now Playing"} movies={nowPlayingMovie?.results} />
    </>
  );
}
