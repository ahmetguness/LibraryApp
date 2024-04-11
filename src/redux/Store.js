const { configureStore } = require("@reduxjs/toolkit");
const { default: Slice } = require("./Slice");

const store = configureStore({
  reducer: {
    login: Slice.reducer,
  },
});

export default store;
