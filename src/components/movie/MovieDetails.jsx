import { useEffect } from "react";
import { LuDot } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import { CREATE_IMG_URL } from "../../utilities/movieServices";
import { fetchMovieDetails } from "../../features/movie/createMovieDetails";

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

  const typeOfMovie = genres?.map((item) => (
    <span className='mx-2' key={item?.id}>
      {item?.name},
    </span>
  ));

  const timer = (runtime) => {
    const hour = Math.floor(runtime / 60);
    const minute = runtime % 60;
    return `${hour}h ${minute}m`;
  };

  return (
    <div className='z-50 left-0 top-0 flex justify-center items-center h-screen'>
      <div className='bg-black rounded max-h-[850px]'>
        <RxCross1
          size={25}
          className='absolute right-6 top-12 text-white cursor-pointer'
        />
        <div className='flex gap-4 items-center'>
          <img
            className='h-[500px] rounded'
            src={CREATE_IMG_URL("w500", poster_path ?? backdrop_path)}
            alt={title}
          />

          <div className='w-[500px]'>
            <h2 className='text-3xl font-bold'>
              {title ?? original_title} ({release_date.slice(0, 4)})
            </h2>
            <div className='flex items-center font-extralight py-3'>
              <p>
                {release_date} ({production_countries[1]?.iso_3166_1})
              </p>
              <LuDot size={20} className='pt-1' />
              <p>{typeOfMovie}</p>
              <LuDot size={20} className='pt-1' />
              <p>{timer(runtime)}</p>
            </div>

            <p className='font-extralight italic text-gray-500 py-6'>
              {tagline}
            </p>

            <h3 className='text-2xl font-semibold pb-2'>Over View</h3>
            <p className='text-gray-400'> {overview?.slice(0, 50)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
