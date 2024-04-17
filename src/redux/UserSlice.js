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
      const { categoryId, bookId } = action.payload;
      if (!state.userFavoriteBooks[categoryId]) {
        state.userFavoriteBooks[categoryId] = [];
      }
      const favoriteBooks = state.userFavoriteBooks[categoryId];
      const bookIndex = favoriteBooks.indexOf(bookId);
      if (bookIndex !== -1) {
        favoriteBooks.splice(bookIndex, 1);
      } else {
        favoriteBooks.push(bookId);
      }
    },
  },
});

export default UserSlice;
export const { updateUserInfo, updateUserFavoriteBooks } = UserSlice.actions;
