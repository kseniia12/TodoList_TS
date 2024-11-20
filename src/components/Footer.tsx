import { useAppSelector, useAppDispatch } from "../hooks";
import { StylesforFooter } from "./styles/style";
import Button from "./Button";
import { deleteAllCompletedTask } from "./store/todoSlice";
import cn from "classnames";

const Footer = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);
  const dispatch = useAppDispatch();

  const completeTodos = todos.filter((todo) => todo.completed === true);
  const uncompleteTodos = todos.filter((todo) => todo.completed === false);

  return (
    <StylesforFooter>
      <div> {uncompleteTodos.length} item left</div>
      <div className="buttons-filter">
        <Button isAcctive={filter === "All"} filter={"All"} />
        <Button isAcctive={filter === "Completed"} filter={"Completed"} />
        <Button isAcctive={filter === "Active"} filter={"Active"} />
      </div>
      <button
        className={cn({
          "button-clear-hidden": !completeTodos.length,
          "button-clear-active": completeTodos.length,
        })}
        onClick={() => dispatch(deleteAllCompletedTask())}
      >
        Clear Completed
      </button>
    </StylesforFooter>
  );
};
export default Footer;
