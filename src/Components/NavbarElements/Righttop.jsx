import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import Childr from "./Subnav/Childr";

const Righttop = () => {
  const [dot, setdot] = useState(false);
  const show = () => {
    console.log("clicked");
    setdot(!dot);
  };
  return (
    <div className="flex justify-center items-center h-full w-full">
      <button onClick={show} className="mx-5">
        <BsThreeDotsVertical className="w-6 h-6 text-white" />
      </button>
      {dot ? (
        <div className="absolute top-20 right-40 z-20 rounded-md bg-gray-800 text-white ">
          <Childr />
        </div>
      ) : null}
      <div>
        <Link className="bg-transparent flex gap-2 text-center p-2 hover:bg-slate-800 text-blue-600 rounded-full border-2 border-gray-700">
          <RxAvatar className="w-6 h-full " />
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Righttop;
