import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import AppSlice from "./AppSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    app: AppSlice,
  },
});
