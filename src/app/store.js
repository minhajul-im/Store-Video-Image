import { configureStore } from "@reduxjs/toolkit";

// import heartReducer from "../features/createHeartSlice";
// import movieTrailer from "../features/createMovieTrailer";
// import popularMovieReducer from "../features/createPopularMovie";
// import upComingMovieReducer from "../features/createUpComingMovie";
// import topRatedMovieReducer from "../features/createTopRatedMovie";

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
    // heart: heartReducer,
    // trailer: movieTrailer,
    // popularMovie: popularMovieReducer,
    // movieUpComing: upComingMovieReducer,
    // topRatedMovie: topRatedMovieReducer,
  },
});

export default store;
