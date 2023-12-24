import { configureStore } from "@reduxjs/toolkit";

import {
  createHeartSlice,
  createMovieTrailer,
  createPopularMovie,
  createTopRatedMovie,
  createUpComingMovie,
  createNowPlayingMovie,
} from "../features/index";

const store = configureStore({
  reducer: {
    heart: createHeartSlice,
    trailer: createMovieTrailer,
    popularMovie: createPopularMovie,
    topRatedMovie: createTopRatedMovie,
    movieUpComing: createUpComingMovie,
    nowPlayingMovie: createNowPlayingMovie,
  },
});

export default store;
