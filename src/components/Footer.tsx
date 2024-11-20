import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { StylesforFooter } from "./styles/style";
import Button from "./Button";
import { deleteAllCompletedTask, ITodo } from "./store/todoSlice";

const Footer = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);

  const [classButton, setclassButton] = useState("button-clear-task");
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);
  const dispatch = useAppDispatch();
  const countTodos = (todos: ITodo[]) => {
    let countNoCompletedTask = todos.filter((todo) => todo.completed === false);
    setCountCompletedTasks(countNoCompletedTask.length);
    countNoCompletedTask.length !== todos.length
      ? setclassButton("button-not-active")
      : setclassButton("button-clear-task");
  }
  useEffect(() => {
    countTodos(todos);
  }, [todos]);

  return (
    <StylesforFooter>
      <div> {countCompletedTasks} item left</div>
      <div className="edit-button">
        <Button isAcctive={filter === "All"} filter={"All"} />
        <Button isAcctive={filter === "Completed"} filter={"Completed"} />
        <Button isAcctive={filter === "Active"} filter={"Active"} />
      </div>
      <button
        className={classButton}
        onClick={() => dispatch(deleteAllCompletedTask())}
      >
        Clear Completed
      </button>
    </StylesforFooter>
  );
};
export default Footer;
