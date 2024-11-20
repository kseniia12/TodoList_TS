import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "./store/filterSlice";

export default function Button({ className1, isAcctive, filter }) {
  const dispatch = useDispatch();
  return (
    <button
      className={isAcctive ? "button-activ": null}
      onClick={() => {
        dispatch(changeFilter(filter));
      }}
    >
      {filter}
    </button>
  );
}
