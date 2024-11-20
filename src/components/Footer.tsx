import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { StylesforFooter } from "./styles/style";
import Button from "./Button";
import { deleteAllCompletedTask } from "./store/todoSlice";
export default function Footer() {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);
  const dispatch = useAppDispatch();
  const [classButtonAll] = useState("button-not-active");
  const [classButton, setclassButton] = useState("button-clear-task");
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function countTodos() {
    let countNoCompletedTask = todos.filter((todo) => todo.completed === false);
    setCountCompletedTasks(countNoCompletedTask.length);
    {
      countNoCompletedTask.length != todos.length
        ? setclassButton("button-not-active")
        : setclassButton("button-clear-task");
    }
  }
  useEffect(() => {
    countTodos();
  }, [todos]);

  return (
    <StylesforFooter>
      <div> {countCompletedTasks} item left</div>
      <div className="edit-button">
        <Button
          className1={classButtonAll}
          isAcctive={filter === "All"}
          filter={"All"}
        />
        <Button
          className1={classButtonAll}
          isAcctive={filter === "Completed"}
          filter={"Completed"}
        />
        <Button
          className1={classButtonAll}
          isAcctive={filter === "Active"}
          filter={"Active"}
        />
      </div>
      <button
        className={classButton}
        onClick={() => dispatch(deleteAllCompletedTask())}
      >
        Clear Completed
      </button>
    </StylesforFooter>
  );
}
