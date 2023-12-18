import { configureStore } from "@reduxjs/toolkit";

import heartReducer from "../features/createHeartSlice";
import movieTrailer from "../features/createMovieTrailer";
import popularMovieReducer from "../features/createPopularMovie";
import upComingMovieReducer from "../features/createUpComingMovie";

const store = configureStore({
  reducer: {
    heart: heartReducer,
    trailer: movieTrailer,
    popularMovie: popularMovieReducer,
    movieUpComing: upComingMovieReducer,
  },
});

export default store;
