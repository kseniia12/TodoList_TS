import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "./store/filterSlice";

interface IProps {
  isAcctive: boolean,
  filter: string
}




const Button: React.FC<IProps> = ({ isAcctive, filter }) => {
  const dispatch = useDispatch();
  return (
    <button className={isAcctive ? "button-activ": undefined}
      onClick={() => {
        dispatch(changeFilter(filter));
      }}
    >
      {filter}
    </button>
  );
};
export default Button;