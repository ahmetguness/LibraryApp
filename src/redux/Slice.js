import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "login",
  initialState: {
    loginAuth: false,
    loginInfo: {
      userName: "",
      password: "",
    },
    selectedCategoryId: 0,
  },
  reducers: {
    logInHandler(state, action) {
      state.login = action.payload;
    },
    setLoginInfo(state, action) {
      state.loginInfo = action.payload;
    },
    changeSelectedCategoryId(state, action) {
      state.selectedCategoryId = action.payload;
    },
  },
});

export default Slice;
export const { logInHandler, setLoginInfo, changeSelectedCategoryId } =
  Slice.actions;
