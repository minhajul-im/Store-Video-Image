import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { MovieItem } from "./index";

export default function MovieRow({ title, movies }) {
  const handleSlider = (offset) => {
    const slider = document.getElementById("slider" + title);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <div className="px-6 pt-2">
      <h1 className="text-xl font-semibold ms-2">{title}</h1>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={() => handleSlider(-500)}
          size={40}
          className="bg-white left-4 opacity-70 rounded-full absolute text-gray-800 hidden group-hover:block cursor-pointer z-10"
        />

        <div
          id={`slider${title}`}
          className="no-scrollbar w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
        >
          {movies.map((movie) => (
            <MovieItem key={movie?.id} movie={movie} />
          ))}
        </div>

        <MdChevronRight
          onClick={() => handleSlider(500)}
          size={40}
          className="bg-white right-4 opacity-70 rounded-full absolute text-gray-800 hidden group-hover:block cursor-pointer z-10"
        />
      </div>
    </div>
  );
}
