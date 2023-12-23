import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import { fetchMoviesApi } from "../features/createMoviesSlice";

export default function Browse() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, [dispatch]);

  if (movies === null) return <h1>fetching........</h1>;

  return (
    <>
      <Hero hero={movies?.results} />

      <MovieRow title={"Up Coming"} movies={movies?.results} />
    </>
  );
}

const Trailer = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/e8rV-9zm1Kw"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
