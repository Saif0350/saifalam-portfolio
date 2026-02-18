import { aboutData } from "@/lib/sitedatasaif";
import React from "react";

const Hero = () => {
  return (
    <div id="about" className="py-24 md:py-28 xl:py-32 text-center">
      {/* Name */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-outfit font-bold stroke-text">
        {aboutData.mainData.name}
      </h1>

      {/* Subtitle */}
      <h2 className="mt-6 text-lg md:text-2xl lg:text-3xl font-outfit font-medium text-white/80 tracking-wide">
        Full Stack & DevOps Engineer
      </h2>

      {/* small description (optional but premium look) */}
      <p className="mt-4 max-w-2xl mx-auto text-white/60 text-sm md:text-base">
        Building scalable web applications, cloud infrastructure and modern
        digital experiences using React, Next.js, Node.js, Docker & AWS.
      </p>
    </div>
  );
};

export default Hero;
