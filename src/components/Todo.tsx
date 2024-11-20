import React, { useState, useEffect } from "react";
import { TodoList } from "./styles/style";
import { useAppDispatch } from "../hooks";
import { completeTodo, deleteTodo, editTodo } from "./store/todoSlice";

interface ComponentProps {
  id: string;
  todo: string;
  completedTask: boolean;
}

const Todo: React.FC<ComponentProps> = ({ id, todo, completedTask }) => {
  const [mouseOver, setMouseOver] = useState("no-activ-cross");
  const [styleTodosList, setStyleTodosList] = useState(false);
  const [valueInputField, setValueInputField] = useState(todo);
  const [strikethroughText, setStrikethroughText] = useState(
    "not-strikethrough-text"
  );
  const [styleCompletedTask, setStyleCompletedTask] =
    useState("unfulfilled-task");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useAppDispatch();

  const completeTask = (id: string) => {
    dispatch(completeTodo(id));
  };

  const deleteTask = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const checkCompletedTask = (completedTask: boolean) => {
    if (completedTask === true) {
      setStrikethroughText("strikethrough-text");
      setStyleCompletedTask("completed-task");
    } else {
      setStrikethroughText("not-strikethrough-text");
      setStyleCompletedTask("unfulfilled-task");
    }
  };

  const handleDoubleClick = (
    e: React.MouseEvent<Element, MouseEvent>
  ): void => {
    setMouseOver("no-activ-cross");
    setIsInputFocused(true);
    e.preventDefault();
    setStyleTodosList(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMouseOver("activ-cross");
      e.preventDefault();
      dispatch(editTodo({ id, valueInputField }));
      setIsInputFocused(false);
      setStyleTodosList(false);
    }
  };

  useEffect(() => {
    checkCompletedTask(completedTask);
  }, [completedTask]);

  return (
    <TodoList
      className="f"
      key={id}
      onMouseEnter={() => setMouseOver("activ-cross")}
      onMouseLeave={() => setMouseOver("no-activ-cross")}
      onDoubleClick={handleDoubleClick}
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
        x
      </div>
    </TodoList>
  );
};
export default Todo;
