import { configureStore } from "@reduxjs/toolkit";

import heartReducer from "../features/createHeartSlice";
import moviesReducer from "../features/createMoviesSlice";
import movieTrailer from "../features/createMovieTrailer";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
    trailer: movieTrailer,
    heart: heartReducer,
  },
});

export default store;
