import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

import { fetchUpComing, fetchPopularMovie } from "../features/index";

export default function Browse() {
  const dispatch = useDispatch();
  const { popularMovie } = useSelector((state) => state.popularMovie);
  const { upComingMovie } = useSelector((state) => state.movieUpComing);

  useEffect(() => {
    dispatch(fetchUpComing());
    dispatch(fetchPopularMovie());
  }, [dispatch]);

  if (upComingMovie === null) return <h1>fetching........</h1>;
  if (popularMovie === null) return <h1>fetching........</h1>;

  console.log(popularMovie);
  console.log(upComingMovie);

  return (
    <>
      <Hero hero={upComingMovie?.results} />

      <MovieRow title={"Up Coming"} movies={upComingMovie?.results} />
      <MovieRow title={"Popular"} movies={popularMovie?.results} />
    </>
  );
}
