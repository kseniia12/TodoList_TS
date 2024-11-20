import React from 'react'
import { useState, useEffect } from "react";
import { addTodo, ITodo, markAllTasksCompleted } from "./store/todoSlice";
import { useAppSelector, useAppDispatch } from '../hooks';

const Input = () => {
  const [todo, setTodo] = useState<string>("");
  const todos = useAppSelector((state) => state.todos.todos);
  const [classNameIcon, setClassNameIcon] = useState<string>("no-activ-icon ");
  const dispatch = useAppDispatch();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim().length) {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  useEffect(() => {
    checkTodos(todos);
  }, [todos]);

  function markAllAsCompleted() {
    dispatch(markAllTasksCompleted());
  }

  function checkTodos(todos : ITodo[]) {
    if (todos.length > 0) {
      setClassNameIcon("activ-icon");
    } else {
      setClassNameIcon("no-activ-icon ");
    }
  }
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <>
    <h1 className="title">todos</h1>
    <div className={`section-input ${isInputFocused ? "activ" : "no-activ"}`}>
      <div
        className={classNameIcon}
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
  )
}
export default Input