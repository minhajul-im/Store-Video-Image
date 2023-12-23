import React from "react";
import MovieItem from "./MovieItem";

export default function MovieRow({ title, movies }) {
  return (
    <div className="p-6 pt-0">
      <h1 className="text-xl font-semibold ">{title}</h1>
      <div className=" relative flex items-center">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
          {movies.map((movie) => (
            <MovieItem key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
