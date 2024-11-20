import React, { useState, useEffect, useRef } from "react";
import { TodoList } from "./styles/style";
import { useDispatch } from "react-redux";
import selectTodosByFilter from "./store/reselect";
import { completeTodo, deleteTodo, editTodo } from "./store/todoSlice";
import { useSelector } from "react-redux";
export default function Todo({ id, todo, completedTask }) {
  const [mouseOver, setMouseOver] = useState("no-activ-cross");
  const [styleTodosList, setStyleTodosList] = useState(false);
  const [valueInputField, setValueInputField] = useState(todo);
  const [strikethroughText, setStrikethroughText] = useState(
    "not-strikethrough-text"
  );
  const [styleCompletedTask, setStyleCompletedTask] =
    useState("unfulfilled-task");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodosByFilter);
  const completeTask = (id) => {
    dispatch(completeTodo(id));
  };
  const [isInputFocused, setIsInputFocused] = useState(false);
  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };
  function checkCompletedTask() {
    if (completedTask === true) {
      setStrikethroughText("strikethrough-text");
      setStyleCompletedTask("completed-task");
    } else {
      setStrikethroughText("not-strikethrough-text");
      setStyleCompletedTask("unfulfilled-task");
    }
  }
  useEffect(() => {
    checkCompletedTask();
  }, [todos]);

  const handleDoubleClick = (e) => {
    setMouseOver("no-activ-cross");
    setIsInputFocused(true);
    e.preventDefault();
    setStyleTodosList(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMouseOver("activ-cross");
      e.preventDefault();
      dispatch(editTodo({ id, valueInputField }));
      setIsInputFocused(false);
      setStyleTodosList(false);
    }
  };

  return (
    <TodoList
      className="f"
      key={id}
      onMouseEnter={() => setMouseOver("activ-cross")}
      onMouseLeave={() => setMouseOver("no-activ-cross")}
      onDoubleClick={(e) => handleDoubleClick(e)}
    >
      <div className={strikethroughText}>
        <div
          className={styleCompletedTask}
          onClick={() => completeTask(id)}
        ></div>
        {styleTodosList === true ? (
          <input
            key={id}
            type="text"
            value={valueInputField}
            onChange={(e) => setValueInputField(e.target.value)}
            onKeyDown={handleKeyPress}
            onMouseEnter={() => setMouseOver("no-activ-cross")}
            className={`${
              isInputFocused ? "activ-form-input" : "no-activ-form-input"
            }`}
          />
        ) : (
          <div className="zz">
            <div key={id}>{todo}</div>
          </div>
        )}
      </div>
      <div className={mouseOver} onClick={() => deleteTask(id)}>
        X
      </div>
    </TodoList>
  );
}
