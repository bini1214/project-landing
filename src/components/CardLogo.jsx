import Image from "next/image";
import React from "react";

const CardLogo = ({ url }) => {
  return (
    <div className="flex flex-col h-16 w-36 pb-10 m-3 justify-center items-center bg-gray-400 rounded-md">
      <Image src={url} width={50} height={50} className="rounded-full" />
      <div className="flex flex-wrap w-36 justify-center items-center justify-items-center">
        <p className="text-sm font-mono font-bold pt-3 ">
          {"St.Joseph, Adama".slice(0, 10) + "..."}
        </p>
      </div>
    </div>
  );
};

export default CardLogo;
