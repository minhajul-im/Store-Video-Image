import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TMDB_API } from "../../utilities/movieServices";

export const fetchNowPlayingMovie = createAsyncThunk(
  "nowPlaying/fetchNowPlayingMovie",
  async () => {
    const response = await fetch(TMDB_API.nowPlaying);
    return await response.json();
  }
);

const initialState = {
  isLoading: false,
  nowPlayingMovie: null,
  isError: false,
};

const createNowPlayingMovie = createSlice({
  name: "popular",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchNowPlayingMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNowPlayingMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nowPlayingMovie = action.payload;
      })
      .addCase(fetchNowPlayingMovie.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default createNowPlayingMovie.reducer;
