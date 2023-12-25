import Image from "next/image";
import React from "react";

const CardWithPhoto = ({ url }) => {
  return (
    <div className="w-64 h-44 p-6 rounded-2xl bg-gray-300  relative hover:w-80 hover:h-56 hover:ring-1 hover:shadow-sm mb-10  group">
      <div className="absolute -top-3 -right-3 rounded-full overflow-hidden w-12 h-12">
        <Image src={url} className="shadow-md mx-auto" width={50} height={40} />
      </div>
      <p className="text-sm group-hover:font-sans group-hover:text-lg">
        Lorem ipsum dolor sit amet consectetur. Arcu dictum ligula suspendisse
        elit viverra. Id aenean ut quisque id amet duis tincidunt.
      </p>
      <p className="text-sm font-bold group-hover:font-extrabold group-hover:text-xl">
        Roman Kebede
      </p>
    </div>
  );
};

export default CardWithPhoto;
