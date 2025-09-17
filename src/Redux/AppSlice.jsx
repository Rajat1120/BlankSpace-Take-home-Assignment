import { createSlice } from "@reduxjs/toolkit";

// AppSlice.js
const AppSlice = createSlice({
  name: "app",
  initialState: {
    selectedMenuItemId: null,
    secondModalItemId: null,
  },
  reducers: {
    openMenuModal(state, action) {
      state.selectedMenuItemId = action.payload;
    },
    closeMenuModal(state) {
      state.selectedMenuItemId = null;
    },
    openSecondModal(state) {
      state.secondModalItemId = state.selectedMenuItemId;
      state.selectedMenuItemId = null;
    },
    closeSecondModal(state) {
      state.selectedMenuItemId = state.secondModalItemId;
      state.secondModalItemId = null;
    },
  },
});

export const {
  openSecondModal,
  closeSecondModal,
  openMenuModal,
  closeMenuModal,
} = AppSlice.actions;
export default AppSlice.reducer;
