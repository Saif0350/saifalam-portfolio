import { achievementsData } from "@/lib/sitedatasaif";
import React from "react";

const Awards = () => {
  return (
    <div
      id="experience"
      className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28"
    >
      {/* Center Heading */}
      <div className="text-center max-w-[700px] mx-auto mb-12">
        <h6 className="inline-block pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
          {achievementsData.mainData.title}
        </h6>

        <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
          {achievementsData.mainData.title2}
          <span className="bg-themeGradient bg-clip-text text-transparent">
            {achievementsData.mainData.title2Span}
          </span>
        </h2>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.experience.map((exp, index) => (
          <div
            key={index}
            className="z-[1] p-8 space-y-4 bg-darkBg rounded-lg relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient"
          >
            {/* Title */}
            <h4 className="font-outfit font-medium text-white text-xl leading-tight">
              {exp.title}
            </h4>

            {/* Basic Info */}
            <div className="space-y-1">
              <a
                href={exp.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-themeGradient transition"
              >
                {exp.company}
              </a>
              <div className="flex justify-between">
                <p className="text-white/50 text-sm">{exp.location}</p>
                <p className="text-white/40 text-xs uppercase tracking-wide">
                  {exp.date}
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc ml-5 space-y-1 text-white/70 text-sm">
              {exp.points.slice(0, 3).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
