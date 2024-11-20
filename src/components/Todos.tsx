import React from "react";
import Todo from "./Todo";
import { useAppSelector} from '../hooks';
import selectTodosByFilter from "./store/reselect";

export default function Todos() {
  const todos = useAppSelector(selectTodosByFilter);
  return (
    <div>
      {todos?.map((todo) => (
        <Todo id={todo.id} todo={todo.text} completedTask={todo.completed} key={todo.id} />
      ))}
    </div>
  );
}
