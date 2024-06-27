import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import Search from "./Subnav/Search";
import vapi from "../Video/Vapi";
const Midtop = () => {
  const [darry, setdarry] = useState([]);
  const search = (e) => {
    console.log(e.key);
    setdarry(e.key);
  };
  return (
    <div className="w-full h-full flex justify-center gap-4 items-center">
      <div className="w-1/2 h-3/4 bg-transparent flex justify-center items-center">
        <input
          type="search"
          onKeyUp={search}
          className="w-full h-2/3  focus:border-blue-500 bg-transparent text-white  rounded-3xl rounded-r-none border-2 border-gray-700 px-6"
          placeholder="Search"
        />
        <button className="w-1/6 h-2/3  bg-slate-800 p-2 flex justify-center items-center text-white rounded-3xl rounded-l-none border-2 border-gray-700">
          <CiSearch className="w-6 h-6 " />
        </button>
      </div>
      <div className="w-1/3 mr-12 h-auto top-20 bg-transparent flex absolute justify-center items-center">
        <Search searchvalue={darry.map((e)=>{
          
        })} />
      </div>

      <button className="w-auto h-auto bg-slate-800 bg-transparent p-2 flex justify-center items-center text-white rounded-full  border-2 border-gray-700">
        <FaMicrophone />
      </button>
    </div>
  );
};

export default Midtop;
