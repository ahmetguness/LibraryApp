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
});

export default Slice;
export const { selectCategory } = Slice.actions;
