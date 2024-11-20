import { createSelector } from "@reduxjs/toolkit";
import { StateTodos } from "./todoSlice";
import { IInitialState } from "./filterSlice";
import { RootState } from ".";

export const SelectAllTodos = (state: RootState) => state.todos.todos;
export const SelectActiveFilter = (state: RootState) => state.filters.filter;

const selectTodosByFilter = createSelector(
  [SelectAllTodos, SelectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === "All") {
      return allTodos;
    }

    if (activeFilter === "Completed") {
      return allTodos.filter((todo) => todo.completed);
    }

    if (activeFilter === "Active") {
      return allTodos.filter((todo) => !todo.completed);
    }

  }
);

export default selectTodosByFilter;
