import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
});

export default loginSlice.reducer