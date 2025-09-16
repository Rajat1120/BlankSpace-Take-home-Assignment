import { createSlice } from "@reduxjs/toolkit";

// AppSlice.js
const AppSlice = createSlice({
  name: "app",
  initialState: {
    selectedMenuItemId: null, // null = closed, string/number = which item is open
  },
  reducers: {
    openMenuModal(state, action) {
      state.selectedMenuItemId = action.payload; // item.id
    },
    closeMenuModal(state) {
      state.selectedMenuItemId = null;
    },
  },
});

export const { openMenuModal, closeMenuModal } = AppSlice.actions;
export default AppSlice.reducer;
