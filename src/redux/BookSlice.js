import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "book",
  initialState: {
    selectedBook: {
      bookId: "",
      bookName: "",
      bookAuthor: "",
      bookYearOfPublication: "",
      bookCover: "",
    },
  },
  reducers: {
    changeSelectedBook(state, action) {
      state.selectedBook = action.payload;
    },
  },
});

export default BookSlice;
export const { changeSelectedBook } = BookSlice.actions;
