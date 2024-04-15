import BookSlice from "./BookSlice";
import UserSlice from "./UserSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: Slice } = require("./Slice");

const store = configureStore({
  reducer: {
    login: Slice.reducer,
    user: UserSlice.reducer,
    book: BookSlice.reducer,
  },
});

export default store;
