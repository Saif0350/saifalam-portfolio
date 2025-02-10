import { aboutData } from "@/lib/sitedatasaif";
import React from "react";

const Hero = () => {
  return (
    <div id="about" className="py-24 md:py-28 xl:py-32 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-outfit font-bold stroke-text">
        {aboutData.mainData.name}
      </h1>
    </div>
  );
};

export default Hero;
