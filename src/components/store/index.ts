import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import filterSlice from "./filterSlice";

export default configureStore({
  reducer: {
    todos: todoSlice,
    filters: filterSlice,
  },
});
