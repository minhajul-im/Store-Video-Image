import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
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
  },
});

export const { addFavorite, removeFavorite } = createHeartSlice.actions;

export default createHeartSlice.reducer;
