import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="flex  flex-col items-center w-1/4 h-96 bg-slate-500 rounded-2xl shadow-md  hover:rotate-6 hover:bg-gray-600 hover:shadow-2xl">
      <p className="text-lg font-sans font-extrabold text-white pt-5">
        {title}
      </p>
      <p className="text-white flex-wrap p-5 text-center">
        Lorem ipsum dolor sit amet consectetur. Vitae posuere aenean elementum
        in purus leo etiam aenean. Sed lorem ornare placerat arcu ut. Sit et
        amet massa lectus id. Aliquam sit id elit venenatis orci nisl commodo.
        Odio laoreet dolor et feugiat elementum cursus id scelerisque mattis.
        Urna in rhoncus vivamus diam. Tincidunt facilisi mattis maecenas varius.
      </p>
    </div>
  );
};

export default Card;
