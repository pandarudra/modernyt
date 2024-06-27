import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { isopen } from "../../redux/Counter/CounterSlice";
const Lefttop = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full flex gap-1">
      <div className="h-full w-1/6  flex flex-col justify-center items-center">
        <button onClick={() => dispatch(isopen())}>
          <FiAlignJustify className="w-auto h-6 pl-9 text-white" />
        </button>
      </div>
      <div className="h-full w-10/12 flex flex-col justify-center items-center">
        <img src="/images/yt.png" alt="logo" className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default Lefttop;
