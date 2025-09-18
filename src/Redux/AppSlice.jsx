import { createSlice } from "@reduxjs/toolkit";

// AppSlice.js
const AppSlice = createSlice({
  name: "app",
  initialState: {
    selectedMenuItemId: null,
    secondModalItemId: null,
    selectedOption: null,
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
    setSelectedOption(state, action) {
      state.selectedOption = action.payload;
    },
    clearSelectedOption(state) {
      state.selectedOption = null;
    },
  },
});

export const {
  openSecondModal,
  closeSecondModal,
  openMenuModal,
  closeMenuModal,
  setSelectedOption,
  clearSelectedOption,
} = AppSlice.actions;
export default AppSlice.reducer;
