import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TRAILER_PLAY } from "../utilities/movieServices";
import { fetchTrailerApi } from "../features/createMovieTrailer";

export default function Hero({ hero }) {
  const dispatch = useDispatch();
  const { trailers } = useSelector((state) => state.trailer);

  const randomHero = Math.floor(Math.random() * hero.length);
  const { id, title, release_date, overview } = hero[randomHero];

  useEffect(() => {
    dispatch(fetchTrailerApi(id));
  }, [dispatch]);

  if (trailers === null) return <h1>fetching trailer...</h1>;

  const { key } = trailers?.results[0];

  return (
    <div>
      <div className="w-full overflow-hidden -z-40">
        <iframe
          className="w-screen aspect-video cursor-not-allowed"
          src={TRAILER_PLAY(key, "?rel=0&amp;autoplay=1&mute=1;controls=0")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="absolute w-full top-[25%] p-4">
        <h1 className="text-5xl pb-4 font-extrabold">{title}</h1>

        <div className="my-4 flex gap-4 items-center">
          <button className="text-xl font-semibold py-2 px-6 bg-slate-400 text-white rounded border border-slate-500 my-3">
            play
          </button>
          <button className="text-xl font-semibold py-2 px-6 bg-white text-gray-700 rounded border border-slate-500 my-3">
            info
          </button>
        </div>

        <p className="text-xs italic py-1 mt-6">{release_date}</p>
        <p className="mt-4 w-[60%]">{overview}</p>
      </div>
    </div>
  );
}

/**
  <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[750px] xl:h-[800px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-[550px] lg:h-[750px] xl:h-[800px] object-cover object-top"
          src={CREATE_IMG_URL("original", backdrop_path)}
          alt={title}
        />
        <div className="absolute w-full top-[25%] p-4">
          <h1 className="text-5xl pb-4 font-extrabold">{title}</h1>

          <button className="text-xl font-semibold py-2 px-6 bg-slate-400 text-white rounded border border-slate-500 my-3">
            play
          </button>

          <p className="text-xs italic py-1 mt-6">{release_date}</p>
          <p className="mt-4 w-[60%]">{overview}</p>
        </div>
      </div>
    </div>
 */
