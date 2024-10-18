import React from "react";
import ahri from "../img/Ahri.jpg";

const Container = () => {
  return (
    <div className="relative mx-auto mt-20 w-80 h-60 bg-blue-500 clip-custom">
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <img
        className="h-40 w-40 rounded-full border-2 border-white"
        src={ahri}
        alt="Ahri"
      />
    </div>
    {/* <div className="absolute w-0 h-0 border-l-[30px] border-l-blue-500 border-r-[30px] border-r-blue-500 border-b-[30px] border-b-blue-500 top-[-30px] left-1/2 transform -translate-x-1/2">
      Hola
    </div> */}
  </div>
  );
};

export default Container;
