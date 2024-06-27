import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: false,
  },
  reducers: {
    isopen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { isopen } = counterSlice.actions;

export default counterSlice.reducer;
