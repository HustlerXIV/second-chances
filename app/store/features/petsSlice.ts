import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPets: {},
  filterInfo: {
    species: "",
    breed: "",
    age: 0,
    pet_status: "available",
    page: "1",
  },
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    updateAllPets: (state, action) => {
      state.allPets = action.payload;
    },
    updateFilterInfo: (state, action) => {
      state.filterInfo = {
        ...state.filterInfo,
        ...action.payload,
      };
    },
    clearPetsStore: (state) => {
      state = Object.assign(initialState);
    },
  },
});

export const { updateAllPets, updateFilterInfo } = petsSlice.actions;
export default petsSlice.reducer;
