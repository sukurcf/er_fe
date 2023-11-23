import { configureStore } from "@reduxjs/toolkit";
import groupIdSlice from "./slices/groupIdSlice";

export const store = configureStore({
  reducer: {
    group: groupIdSlice,
  },
});
console.log("store", store.getState());
