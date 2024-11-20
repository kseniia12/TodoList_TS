import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "./store/filterSlice";
import cn from "classnames";

interface IProps {
  isAcctive: boolean;
  filter: string;
}

const Button: React.FC<IProps> = ({ isAcctive, filter }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={cn({ "button-filter-activ": isAcctive })}
      onClick={() => {
        dispatch(changeFilter(filter));
      }}
    >
      {filter}
    </button>
  );
};
export default Button;
