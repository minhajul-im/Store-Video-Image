import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import {
  addFavorite,
  removeFavorite,
} from "../../features/movie/createHeartSlice";
import { CREATE_IMG_URL } from "../../utilities/movieServices";

export default function MovieItem({ movie, onShow }) {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.heart);

  const { id, title, backdrop_path, poster_path } = movie || {};

  const handleChangeHeart = () => {
    dispatch(isActive ? removeFavorite() : addFavorite());
  };

  return (
    <div className='relative w-[160px] sm:w-[200px] lg:w-[300px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 select-none'>
      <img
        className='w-full h-44 object-cover object-top'
        src={CREATE_IMG_URL("w500", poster_path ?? backdrop_path)}
        alt={title}
      />

      <div className='absolute top-0 left-0 w-full h-44 bg-black/80 opacity-0 hover:opacity-100'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-semibold'>
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          <br />
        </p>
        <button
          onClick={() => onShow(id)}
          className='absolute text-xs right-3 top-3 border py-1 px-2 rounded bg-gray-600 hover:bg-gray-800'
        >
          details
        </button>

        <div>
          {isActive ? (
            <FaHeart
              onClick={handleChangeHeart}
              className='absolute top-3 left-3 text-gray-200'
              size={20}
            />
          ) : (
            <FaRegHeart
              onClick={handleChangeHeart}
              className='absolute top-3 left-3 text-gray-200'
              size={20}
            />
          )}
        </div>
      </div>
    </div>
  );
}
