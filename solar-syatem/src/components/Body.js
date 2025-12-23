import React from "react";
import Slider from "./Slider";
import Overview from "./Overview";
import Specifications from "./Specifications";
import Whatsapp from "./Whatsapp";
import { Link } from "react-router";
import Call from "./Call";

const Body = () => {
  return (
    <div>
      <Slider />
      <Overview />
      <Specifications />
      <Link
        target="_blank"
        to="https://api.whatsapp.com/send/?phone=%2B919175175565&text&type=phone_number&app_absent=0"
      >
        <Whatsapp />
      </Link>
      <Link
        to="tel:+919175175565"
      >
        <Call />
      </Link>
    </div>
  );
};

export default Body;
