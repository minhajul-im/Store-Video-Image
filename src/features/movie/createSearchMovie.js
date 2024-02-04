import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SEARCH_MOVIE } from "../../utilities/movieServices";

export const fetchSearchMovie = createAsyncThunk(
  "searchMovie/fetchSearchMove",
  async (query) => {
    const res = await fetch(SEARCH_MOVIE(query));
    return await res.json();
  }
);

const initialState = {
  isLoading: false,
  searchMovie: null,
  isError: false,
};

const createSearchMovie = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchMovie = action.payload;
      })
      .addCase(fetchSearchMovie.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default createSearchMovie.reducer;
