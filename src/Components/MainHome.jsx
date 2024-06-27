import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Long from "./Sidebarelem/Long";
import vapi from "./Video/Vapi";

import { useSelector } from "react-redux";
import Short from "./Sidebarelem/Short";
import Vcard from "./Video/Vcard";

const MainHome = () => {
  const open = useSelector((state) => state.sidebar.value);
  const [side, setside] = useState(<Short />);
  const [sideWidth, setSideWidth] = useState("width-for-short");
  useEffect(() => {
    console.log(open);
    if (open) {
      setside(<Long />);
      setSideWidth("width-for-long");
    } else {
      setside(<Short />);
      setSideWidth("width-for-short");
    }
  }, [open]);

  return (
    <>
      <div className="w-full h-screen overflow-hidden  flex flex-col">
        <div className="w-full h-auto">
          <Navbar />
        </div>
        <div className="w-full h-full flex  ">
          <div className={`h-full ${sideWidth}`}>{side}</div>
          <div className="h-full w-full overflow-scroll bg-black grid grid-cols-3">
            {vapi.map((v) => {
              return (
                <Vcard
                  key={v.id}
                  vlink={v.video}
                  title={v.title}
                  ilink={v.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
