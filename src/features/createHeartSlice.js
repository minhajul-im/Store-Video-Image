import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  isDisplay: false,
};
const createHeartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addFavorite: (state) => {
      state.isActive = true;
    },
    removeFavorite: (state) => {
      state.isActive = false;
    },
    showDisplay: (state) => {
      state.isDisplay = true;
    },
  },
});

export const { addFavorite, removeFavorite, showDisplay } =
  createHeartSlice.actions;

export default createHeartSlice.reducer;
