import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  }
});

export default authSlice.reducer;
export const {isAuth} = authSlice.actions;