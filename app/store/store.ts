import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./features/petsSlice";
import myPetReducer from "./features/myPetSlice";

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    myPet: myPetReducer,
  },
});

export default store;
