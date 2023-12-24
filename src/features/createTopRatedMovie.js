import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TMDB_API from "../utilities/movieServices";

export const fetchTopRatedMovie = createAsyncThunk(
  "topRated/fetchTopRatedMovie",
  async () => {
    const response = await fetch(TMDB_API.topRated);
    return await response.json();
  }
);

const initialState = {
  isLoading: false,
  topRatedMovie: null,
  isError: false,
};

const createTopRatedMovie = createSlice({
  name: "popular",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchTopRatedMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTopRatedMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topRatedMovie = action.payload;
      })
      .addCase(fetchTopRatedMovie.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default createTopRatedMovie.reducer;
