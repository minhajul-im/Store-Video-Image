import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TMDB_API from "../utilities/movieServices";

export const fetchUpComing = createAsyncThunk(
  "upComing/fetchUpComing",
  async () => {
    const response = await fetch(TMDB_API.upComing);
    return await response.json();
  }
);

const initialState = {
  isLoading: false,
  upComingMovie: null,
  isError: false,
};

const createUpComingMovie = createSlice({
  name: "upComing",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchUpComing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUpComing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.upComingMovie = action.payload;
      })
      .addCase(fetchUpComing.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default createUpComingMovie.reducer;
