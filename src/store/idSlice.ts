import { createSlice } from "@reduxjs/toolkit";

export type IDState = {
  currentKey: number;
};

const initialState: IDState = {
  currentKey: 4,
};

export const iDSlice = createSlice({
  name: "identifier",
  initialState,
  reducers: {
    submit: (state) => {
      state.currentKey += 1;
    },
  },
});

export const { submit } = iDSlice.actions;
export default iDSlice.reducer;
