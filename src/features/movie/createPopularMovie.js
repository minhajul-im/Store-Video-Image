import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TMDB_API } from "../../utilities/movieServices";

export const fetchPopularMovie = createAsyncThunk(
  "popular/fetchPopularMovie",
  async () => {
    const response = await fetch(TMDB_API.popular);
    return await response.json();
  }
);

const initialState = {
  isLoading: false,
  popularMovie: null,
  isError: false,
};

const createPopularMovie = createSlice({
  name: "popular",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchPopularMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularMovie = action.payload;
      })
      .addCase(fetchPopularMovie.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default createPopularMovie.reducer;
