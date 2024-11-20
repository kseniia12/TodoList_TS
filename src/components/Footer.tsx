import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StylesforFooter } from "./styles/style";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteAllCompletedTask } from "./store/todoSlice";
export default function Footer() {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.filters.filter);
  const dispatch = useDispatch();
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
