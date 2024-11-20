import { createSelector } from "@reduxjs/toolkit";
import { StateTodos } from "./todoSlice";
import { IInitialState } from "./filterSlice";

export const SelectAllTodos = (state: StateTodos) => state.todos;
export const SelectActiveFilter = (state: IInitialState) => state.filter;

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
