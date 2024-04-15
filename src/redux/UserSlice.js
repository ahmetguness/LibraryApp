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
      const { categoryId, bookIds } = action.payload;
      state.userFavoriteBooks[categoryId] = bookIds;
    },
  },
});

export default UserSlice;
export const { updateUserInfo, updateUserFavoriteBooks } = UserSlice.actions;
