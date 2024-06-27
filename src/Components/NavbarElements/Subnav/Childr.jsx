import React from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

const Childr = () => {
  return (
    <div className=" h-96 w-72 bg-gray-950 rounded-md flex flex-col gap-1">
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
      <hr />
      <Link className="w-full h-1/6 flex justify-start text-slate-400 pl-4 items-center gap-4  hover:bg-slate-600">
        <IoSettingsOutline className="w-6 h-6  text-slate-400" />
        Setting
      </Link>
      <hr />
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
      <Link className="w-full h-1/6  hover:bg-slate-600"></Link>
    </div>
  );
};

export default Childr;
