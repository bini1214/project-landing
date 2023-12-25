import React from "react";

const Hero = () => {
  return (
    <div className="flex  flex-row justify-center   items-center h-screen">
      <div className="flex flex-col justify-center justify-items-center">
        <p className="font-sans text-5xl font-extrabold text-center text-white mb-7">
          One app to rule them
          <br />
          all exams!
          <br />
          <span className="text-xl font-mono italic text-gray-400">
            not even one left.
          </span>
        </p>
        <button className="bg-blue-950 font-extrabold hover:bg-white hover:text-blue-950 rounded-md text-cyan-50 text-xl py-4 px-4 mt-2">
          Download
        </button>
        <button className="ring-1 ring-white font-extrabold hover:bg-white hover:text-blue-950 rounded-md text-cyan-50 text-xl py-4 px-4 mt-2">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
