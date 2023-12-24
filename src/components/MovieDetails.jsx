import { useEffect } from "react";
import { LuDot } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovieDetails } from "../features/index";
import { CREATE_IMG_URL } from "../utilities/movieServices";

export default function MovieDetails({ id }) {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch]);

  if (movieDetails === null) return <h1>fetching......</h1>;

  const {
    title,
    genres,
    runtime,
    tagline,
    overview,
    poster_path,
    release_date,
    backdrop_path,
    original_title,
    production_countries,
  } = movieDetails || {};

  const handleDetailsHideBtn = () => {
    const hide = document.getElementById("hideBtn");
    hide.style.display = "none";
  };

  const typeOfMovie = genres?.map((item) => (
    <span className="mx-2" key={item?.id}>
      {item?.name},
    </span>
  ));

  const timer = (runtime) => {
    const hour = Math.floor(runtime / 60);
    const minute = runtime % 60;
    return `${hour}h ${minute}m`;
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div
        id={`hideBtn`}
        className="bg-black/80 rounded p-10 max-w-[1050px] max-h-[850px] relative"
      >
        <RxCross1
          size={25}
          onClick={handleDetailsHideBtn}
          className="absolute right-2 top-2 text-white cursor-pointer"
        />
        <div className="mt-4 pt-4 flex gap-6 items-center">
          <img
            className="h-[500px] rounded"
            src={CREATE_IMG_URL("w500", poster_path ?? backdrop_path)}
            alt={title}
          />

          <div className="">
            <h2 className="text-3xl font-bold">
              {title ?? original_title} ({release_date.slice(0, 4)})
            </h2>
            <div className="flex items-center font-extralight py-3">
              <p>
                {release_date} ({production_countries[1]?.iso_3166_1})
              </p>
              <LuDot size={20} className="pt-1" />
              <p>{typeOfMovie}</p>
              <LuDot size={20} className="pt-1" />
              <p>{timer(runtime)}</p>
            </div>
            <div className="w-full h-[100px] rounded bg-purple-700 py-2"></div>
            <p className="font-extralight italic text-gray-500 py-6">
              {tagline}
            </p>

            <h3 className="text-2xl font-semibold pb-2">Over View</h3>
            <p className="text-gray-400"> {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
