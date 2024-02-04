import { configureStore } from "@reduxjs/toolkit";

import createHeartSlice from "../features/movie/createHeartSlice";
import createMovieDetails from "../features/movie/createMovieDetails";
import createPopularMovie from "../features/movie/createPopularMovie";
import createMovieTrailer from "../features/movie/createMovieTrailer";
import createTopRatedMovie from "../features/movie/createTopRatedMovie";
import createUpComingMovie from "../features/movie/createUpComingMovie";
import createNowPlayingMovie from "../features/movie/createNowPlayingMovie";

const store = configureStore({
  reducer: {
    heart: createHeartSlice,
    trailer: createMovieTrailer,
    popularMovie: createPopularMovie,
    movieDetails: createMovieDetails,
    movieUpComing: createUpComingMovie,
    topRatedMovie: createTopRatedMovie,
    nowPlayingMovie: createNowPlayingMovie,
  },
});

export default store;
