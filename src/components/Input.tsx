import React from "react";
import { useState } from "react";
import { addTodo, markAllTasksCompleted } from "./store/todoSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import cn from "classnames";
const Input = () => {
  const [todo, setTodo] = useState<string>("");
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim().length) {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  const markAllAsCompleted = () => {
    dispatch(markAllTasksCompleted());
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <h1 className="title">todos</h1>
      <div
        className={cn({
          "section-input-activ": isInputFocused,
          "section-input-noactiv": !isInputFocused,
        })}
      >
        <div
          className={cn({
            "activ-icon": todos.length,
            "no-activ-icon": !todos.length,
          })}
          onClick={() => markAllAsCompleted()}
        ></div>
        <form onSubmit={addTask}>
          <input
            className="input"
            type="text"
            placeholder="What needs to be done?"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </form>
      </div>
    </>
  );
};
export default Input;
