import { createSelector } from "@reduxjs/toolkit";

export const SelectAllTodos = (state) => state.todos.todos;
export const SelectActiveFilter = (state) => state.filters.filter;

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
