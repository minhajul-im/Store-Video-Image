import React from "react";
import { CREATE_IMG_URL } from "../utilities/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addFavorite } from "../features/createHeartSlice";

export default function MovieItem({ movie }) {
  const { title, backdrop_path, poster_path } = movie;
  const { isTrue } = useSelector((state) => state.heart);

  const handleChangeHeart = () => {
    console.log(isTrue);
    addFavorite(true);
  };

  return (
    <div className="relative w-[160px] sm:w-[200px] lg:w-[300px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-44 object-cover object-top"
        src={CREATE_IMG_URL("w500", poster_path ?? backdrop_path)}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-44 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-semibold">
          {title}
        </p>
        <p>
          {isTrue ? (
            <FaHeart
              onClick={handleChangeHeart}
              className="absolute top-3 left-3 text-gray-200"
              size={20}
            />
          ) : (
            <FaRegHeart
              className="absolute top-3 left-3 text-gray-200"
              size={20}
            />
          )}
        </p>
      </div>
    </div>
  );
}
