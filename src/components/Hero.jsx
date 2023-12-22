import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesApi } from "../features/createMoviesSlice";
import { CREATE_IMG_URL } from "../utilities/movieServices";

export default function Hero() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, []);

  if (movies === null) return <p> fetching...........</p>;

  const { results } = movies;

  const randomMovie = Math.floor(Math.random() * results.length);

  const { title, release_date, overview, backdrop_path } = results[randomMovie];

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[750px] xl:h-[800px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-[550px] lg:h-[750px] xl:h-[800px] object-cover object-top"
          src={CREATE_IMG_URL("original", backdrop_path)}
          alt={title}
        />
        <div className="absolute w-full top-[25%] p-4">
          <h1 className="text-white text-5xl pb-4 font-extrabold">{title}</h1>

          <p className="text-xs italic py-1">{release_date}</p>
          <p className="mt-4 w-[60%]">{overview}</p>
        </div>
      </div>
    </div>
  );
}
