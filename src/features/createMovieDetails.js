import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { MOVIE_DETAILS } from "../utilities/movieServices";

export const fetchMovieDetails = createAsyncThunk(
  "details/fetchMovieDetails",
  async (id) => {
    const response = await fetch(MOVIE_DETAILS(id));
    return await response.json();
  }
);

const initialState = {
  isLoading: false,
  movieDetails: null,
  isError: false,
};

const createMovieDetails = createSlice({
  name: "popular",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default createMovieDetails.reducer;
