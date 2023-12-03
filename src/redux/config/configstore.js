import { configureStore } from "@reduxjs/toolkit";
import letterSlice from "redux/modules/letterSlice";
import memberSlice from "redux/modules/memberSlice";
import authSlice from "redux/modules/authSlice";

const store = configureStore({
  reducer: {
    letterSlice,
    memberSlice,
    authSlice,
  }
});

export default store;