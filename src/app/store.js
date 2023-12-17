import { configureStore } from "@reduxjs/toolkit";

import {
  createHeartSlice,
  createMovieTrailer,
  createPopularMovie,
  createTopRatedMovie,
  createUpComingMovie,
} from "../features/index";

const store = configureStore({
  reducer: {
    heart: createHeartSlice,
    trailer: createMovieTrailer,
    popularMovie: createPopularMovie,
    movieUpComing: createUpComingMovie,
    topRatedMovie: createTopRatedMovie,
  },
});

export default store;
