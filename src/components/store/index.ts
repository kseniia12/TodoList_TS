import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;