import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

import { fetchMovieDetails } from "../features/index";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(994108));
  }, [dispatch]);

  if (movieDetails === null) return <h1>fetching......</h1>;

  const handleDetailsHideBtn = () => {
    const hide = document.getElementById("hideBtn");
    hide.style.display = "none";
  };

  console.log(movieDetails);

  return (
    <div className=" flex justify-center items-center h-screen">
      <div
        id={`hideBtn`}
        className="bg-black/20 rounded p-10 max-w-[850px] max-h-[750px] relative"
      >
        <RxCross1
          size={25}
          onClick={handleDetailsHideBtn}
          className="absolute right-2 top-2 text-white cursor-pointer"
        />
      </div>
    </div>
  );
}
