import React from "react";
import logo from "../images/logo.png";
import HeaderLinks from "./HeaderLinks";

const Head = () => {
  return (
    <div className="flex justify-between shadow-xl bg-green-50 sticky top-0 z-50">
      <div className="flex">
        <img
          className="h-20 py-4 pl-2 rounded-full col-span-1"
          src={logo}
          alt="logo"
        />
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mt-5">
          Sai Electricals & Solar
        </h1>
      </div>
      <HeaderLinks/>
    </div>
  );
};

export default Head;
