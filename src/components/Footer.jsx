import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" px-36 py-20 flex flex-col bg-blue-950 justify-center items-center">
      <div>
        <div className="flex flex-1 justify-center items-center">
          <p className=" text-white text-xl font-bold s">Follow us on</p>
        </div>
        <div className="flex flex-row gap-5 text-white pt-4 pb-10">
          <Link
            href={"tiktok.com/@temaribet"}
            className="hover:bg-gray-500 rounded-full p-1.5"
          >
            <FaTiktok />
          </Link>
          <Link
            href={"t.me/temaribet"}
            className="hover:bg-gray-500 rounded-full p-1.5"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href={"instagram.com/temaribet"}
            className="hover:bg-gray-500 rounded-full p-1.5"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"facebook.com/prepx_et"}
            className="hover:bg-gray-500 rounded-full p-1.5"
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
      <p className="text-white">
        Product of <span className="font-bold normal-case">Temaribet Inc.</span>
      </p>
      <p className="text-white italic">All rights reserved 2023.</p>
    </div>
  );
};

export default Footer;
