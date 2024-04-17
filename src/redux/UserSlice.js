const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      userId: "",
      userName: "",
      userPassword: "",
    },
    userFavoriteBooks: {},
  },
  reducers: {
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    updateUserFavoriteBooks(state, action) {
      state.userFavoriteBooks = action.payload
    },
  },
});

export default UserSlice;
export const { updateUserInfo, updateUserFavoriteBooks } = UserSlice.actions;
