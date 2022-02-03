import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./todos/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: TodosSlice,
  },
});
