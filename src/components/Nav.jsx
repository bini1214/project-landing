import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-around py-10 ">
      <p className="font-extrabold text-white text-lg">PrepX</p>
      <div className="flex flex-row gap-10 font-semibold">
        <Link
          href={"#"}
          className="text-white font-bold hover:text-blue-400 hover:underline"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="text-white font-bold hover:text-blue-400 hover:underline"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="text-white font-bold hover:text-blue-400 hover:underline"
        >
          Pricing
        </Link>
      </div>
      <Link
        href={"#"}
        className="ring-1 p-1 font-bold border-spacing-8 rounded-md hover:bg-white text-white  hover:text-blue-950"
      >
        Download
      </Link>
    </nav>
  );
};

export default Nav;
