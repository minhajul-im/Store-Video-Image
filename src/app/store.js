import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/createUserSlice";
import moviesReducer from "../features/createMoviesSlice";
import movieTrailer from "../features/createMovieTrailer";
import heartReducer from "../features/createHeartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    trailer: movieTrailer,
    heart: heartReducer,
  },
});

export default store;
