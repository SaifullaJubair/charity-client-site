import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import useReducer from "./features/user/userSlice";
import { api } from "./api/apiSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
    [api.reducerPath]: api.reducer,
  },
});
