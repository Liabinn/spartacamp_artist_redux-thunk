import { configureStore } from "@reduxjs/toolkit";
import letterSlice from "redux/modules/letterSlice";
import memberSlice from "redux/modules/memberSlice";

const store = configureStore({
  reducer: {
    letterSlice,
    memberSlice,
  }
});

export default store;