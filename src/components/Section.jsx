import React from "react";
import Image from "next/image";
import CardWithPhoto from "./CardWithPhoto";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Section = () => {
  return (
    <div className="flex flex-row bg-gradient-to-r  from-slate-400 h-[50%] mt-32 pl-36 py-28 gap-4 relative">
      <Image
        src="/mobile.png"
        className="pr-20 pt-5 rotate-12 absolute -top-14 right-20  hover:rotate-0 transition duration-500 ease-in-out"
        width={450}
        height={275}
      />
      <div>
        <p className="text-4xl  pt-10 font-extrabold w-1/3">
          One app to rule all them all exams!
        </p>
        <p className="  w-[50%] pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quas, voluptates, voluptatibus, sapiente quos repellendus
          voluptas quia doloribus molestiae natus. Quisquam voluptatum, quas,
          voluptates, voluptatibus, sapiente quos repellendus voluptas quia
          doloribus molestiae natus. Quisquam voluptatum, quas, voluptates,
          voluptatibus, sapiente quos repellendus voluptas quia doloribus
          molestiae natus. Quisquam voluptatum, quas, voluptates, voluptatibus,
          sapiente quos repellendus voluptas quia doloribus molestiae natus.
          Quisquam voluptatum, quas, voluptates, voluptatibus, sapiente quos
          repellendus voluptas quia doloribus molestiae natus.
        </p>
        <button className="bg-blue-950 font-extrabold  hover:bg-white hover:text-blue-950 rounded-md text-cyan-50 text-xl py-4 px-4 mt-8">
          Download
        </button>
      </div>
    </div>
  );
};

export function SectionWithComment() {
  return (
    <div className="flex flex-row bg-gradient-to-r  from-slate-400 h-[50%] mt-32 pl-36 py-14 gap-4 relative">
      <div>
        <p className="text-4xl  py-10 font-extrabold w-1/2">
          People who knocked out their exams are saying these about PrepX
        </p>
        <div className="flex flex-wrap flex-row gap-5 justify-evenly items-center">
          <div>
            <button className="flex flex-row gap-2 items-center text-xl font-bold hover:bg-black hover:text-white  rounded-full p-1">
              <IoIosArrowBack />
            </button>
          </div>
          <CardWithPhoto url={"/student.jpg"} />
          <CardWithPhoto url={"/student-2.jpg"} />
          <CardWithPhoto url={"/student-3.jpg"} />
          <CardWithPhoto url={"/student-4.jpg"} />
          <div>
            <button className="flex flex-row gap-2 items-center text-xl font-bold hover:bg-black hover:text-white  rounded-full p-1">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
