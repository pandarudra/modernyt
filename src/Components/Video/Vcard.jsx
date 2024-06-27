import React from "react";

const Vcard = ({ vlink, title, ilink }) => {
  return (
    <div className=" h-64 w-96 rounded-sm m-3 flex flex-col gap-0.5 text-center">
      <div>
        <video className="w-full h-48" src={vlink} controls></video>
      </div>
      <div className="flex gap-1 text-center w-full h-11 px-2">
        <img src={ilink} alt="" className="h-8 w-8 rounded-full" />
        <h1 className="text-lg  text-white ">{title}</h1>
      </div>
    </div>
  );
};

export default Vcard;
