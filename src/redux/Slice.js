const { createSlice } = require("@reduxjs/toolkit");

const Slice = createSlice({
  name: "book",
  initialState: {
    categoryId: null,
  },
  reducers: {
    selectCategory(state, action) {
      state.categoryId = action.payload;
    },
  },

  name: "login",
  initialState: {
    login: false
  },
  reducers: {
    logInHandler(state, action){
      state.login = action.payload
    }
  }
});

export default Slice;
export const { selectCategory, logInHandler } = Slice.actions;
