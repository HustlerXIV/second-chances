import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./features/petsSlice";

export const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
});

export default store;
