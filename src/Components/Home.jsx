import React from "react";
import { Link } from "react-router-dom";

import { FiArrowRightCircle } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen welcome ">
        <video
          autoPlay
          muted
          loop
          // src="https://videos.pexels.com/video-files/2324166/2324166-uhd_2560_1440_25fps.mp4"
          src="https://videos.pexels.com/video-files/5649204/5649204-uhd_2560_1440_25fps.mp4"
          className="w-full h-screen object-cover"
        ></video>
        <div
          className="
         w-full h-screen flex  flex-col justify-center items-center text-white absolute top-0 left-0
        "
        >
          <Link to="/home" className="text-4xl font-bold">
            <img
              src="/images/yt.png"
              alt="React Logo"
              className=" w-auto z-30 h-auto hover:transform hover:scale-110 transition duration-300 ease-in-out"
            />
          </Link>
          <Link
            to="/home"
            className=" w-auto  getstartedbtn h-auto  
           text-pretty text-white shadow-xl flex gap-1 shadow-red-700 font-bold py-2 px-4 rounded-md  mt-4 hover:bg-red-700 hover:text-white transition duration-300 ease-in-out
          "
          >
            Get Started
            <FiArrowRightCircle className=" w-5 h-auto" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
