import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { Link } from "react-router-dom";

const Short = () => {
  return (
    <div className="w-full  h-full text-xs bg-black flex flex-col gap-2 overflow-y-hidden justify-start">
      <Link className="w-full h-20 flex justify-center text-white flex-col items-center hover:bg-slate-700">
        <MdHomeFilled className="w-6 h-6 text-white" />
        Home
      </Link>
      <Link className="w-full h-20 flex justify-center text-white flex-col items-center hover:bg-slate-700">
        <SiYoutubeshorts className="w-6 h-6 text-white" />
        Shorts
      </Link>
      <Link className="w-full h-20 flex justify-center text-white flex-col items-center hover:bg-slate-700">
        <MdOutlineSubscriptions className="w-6 h-6 text-white" />
        Subscriptions
      </Link>
      <Link className="w-full h-20 flex justify-center text-white flex-col items-center hover:bg-slate-700">
        <MdOndemandVideo className="w-6 h-6 text-white" />
        Library
      </Link>
      <Link className="w-full h-20 flex justify-center text-white flex-col items-center hover:bg-slate-700">
        <FaHistory className="w-6 h-6 text-white" />
        History
      </Link>
    </div>
  );
};

export default Short;
