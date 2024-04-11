// slice.js
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "login",
  initialState: {
    loginAuth: false,
    loginInfo: {
      userName: '',
      password: '',
    }
  },
  reducers: {
    logInHandler(state, action) {
      state.login = action.payload;
    },
    setLoginInfo(state, action) {
      state.loginInfo = action.payload;
    },
  },
});

export default Slice;
export const { logInHandler, setLoginInfo } = Slice.actions;
