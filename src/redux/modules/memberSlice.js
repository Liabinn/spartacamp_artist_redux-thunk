import { createSlice } from "@reduxjs/toolkit";

const initialState = "전체"

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    chooseMember: (state, action) => {
      return action.payload;
    },
  }
});

export default memberSlice.reducer;
export const {chooseMember} = memberSlice.actions;