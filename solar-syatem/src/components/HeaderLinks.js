import React from "react";
import { Link } from "react-router";

const HeaderLinks = () => {
  return (
    <div>
      <ul className="flex p-3 mt-1 ">
        <li className="p-2 font-bold text-gray-900 cursor-pointer hover:text-orange-300"><Link to="/">Home 🏠</Link></li>
        <li className="relative group p-2 font-bold text-gray-900 cursor-pointer">
          Company ▾
          <ul
            className="absolute left-0 top-full mt-2 w-40
                         bg-green-100 rounded-lg shadow-lg
                         invisible group-hover:visible
                         opacity-0 group-hover:opacity-100
                         transition-all duration-200"
          >
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              <Link to="/about">About Company</Link>
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">Why Us?</li>
          </ul>
        </li>
        <li className="relative group p-2 font-bold text-gray-900 cursor-pointer">
          Product ▾
          <ul
            className="absolute left-0 top-full mt-2 w-56
                         bg-green-100 rounded-lg shadow-lg
                         invisible group-hover:visible
                         opacity-0 group-hover:opacity-100
                         transition-all duration-200"
          >
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Residential Solar Rooftop
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Commercial Solar Rooftop
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Solar Home Lights
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Solar Water Heater
            </li>
          </ul>
        </li>
        <li className="relative group p-2 font-bold text-gray-900 cursor-pointer">
          Solutions ▾
          <ul
            className="absolute left-0 top-full mt-2 w-52
                         bg-green-100 rounded-lg shadow-lg
                         invisible group-hover:visible
                         opacity-0 group-hover:opacity-100
                         transition-all duration-200"
          >
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Solar Calculator
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Solar Financing
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">
              Solar Consultations
            </li>
            <li className="p-2 hover:bg-green-200 hover:rounded-lg">Service</li>
          </ul>
        </li>
        <li className="p-2 mr-2 font-bold text-gray-900 cursor-pointer">
        <Link to="/contact">Contact Us</Link>
        </li>
        <li className="p-2 bg-blue-900 border text-white rounded-2xl cursor-pointer">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks
