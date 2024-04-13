const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      userId: "",
      userName: "",
      userPassword: "",
    },
  },
  reducers: {
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export default UserSlice;
export const { updateUserInfo } = UserSlice.actions;
