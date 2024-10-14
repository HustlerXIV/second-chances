import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDialog: false,
};

const myPetSlice = createSlice({
  name: "myPet",
  initialState,
  reducers: {
    updateMyPetDialog: (state, action) => {
      state.openDialog = action.payload;
    },
  },
});

export const { updateMyPetDialog } = myPetSlice.actions;
export default myPetSlice.reducer;
