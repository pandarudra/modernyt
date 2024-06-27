import React from "react";
import Lefttop from "./NavbarElements/Lefttop";
import Midtop from "./NavbarElements/Midtop";
import Righttop from "./NavbarElements/Righttop";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-black flex ">
      <div className="h-full w-2/12 ">
        <Lefttop />
      </div>
      <div className="h-full w-2/3 ">
        <Midtop />
      </div>
      <div className="h-full w-2/12 ">
        <Righttop />
      </div>
    </div>
  );
};

export default Navbar;
