import UserSlice from "./UserSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: Slice } = require("./Slice");

const store = configureStore({
  reducer: {
    login: Slice.reducer,
    user: UserSlice.reducer,
  },
});

export default store;
