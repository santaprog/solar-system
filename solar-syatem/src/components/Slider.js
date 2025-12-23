import React from "react";
import { useState, useEffect } from "react";
import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpeg";
import slide3 from "../images/slide3.jpeg";

const images = [slide1, slide2, slide3];
const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="slider">
      <img
        className="w-full h-96 object-cover transition-all duration-700"
        src={images[index]}
        alt="slider"
      />
    </div>
  );
};

export default Slider;
