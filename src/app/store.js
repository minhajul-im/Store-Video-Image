import { configureStore } from "@reduxjs/toolkit";

import {
  createHeartSlice,
  createMovieTrailer,
  createPopularMovie,
  createMovieDetails,
  createTopRatedMovie,
  createUpComingMovie,
  createNowPlayingMovie,
} from "../features/index";

const store = configureStore({
  reducer: {
    heart: createHeartSlice,
    trailer: createMovieTrailer,
    movieDetails: createMovieDetails,
    popularMovie: createPopularMovie,
    topRatedMovie: createTopRatedMovie,
    movieUpComing: createUpComingMovie,
    nowPlayingMovie: createNowPlayingMovie,
  },
});

export default store;
