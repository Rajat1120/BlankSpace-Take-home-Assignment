import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "Menu",
  initialState: { name: "Starters" },
  reducers: {
    setCategory(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
