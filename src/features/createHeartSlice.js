import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTrue: false,
};
const createHeartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addFavorite: (state, actions) => {
      state.isTrue = actions.payload;
    },
    removeFavorite: (state, actions) => {
      state.isTrue = actions.payload;
    },
  },
});

export const { addFavorite } = createHeartSlice.actions;

export default createHeartSlice.reducer;
