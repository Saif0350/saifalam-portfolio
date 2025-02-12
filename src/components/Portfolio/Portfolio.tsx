"use client";

import { portfolioData } from "@/lib/sitedatasaif";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import projectsData from "@/lib/projectsData";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const topSection = sectionRef.current;
    const cardsContainer = cardsRef.current;

    if (topSection && cardsContainer) {
      gsap.to(cardsContainer, {
        x: "-30%",
        ease: "none",
        scrollTrigger: {
          trigger: topSection,
          start: "center center",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      id="portfolio"
      className="px-5 lg:px-10 overflow-hidden w-full ContainerCard "
    >
      <div className="bg-darkBg rounded-2xl overflow-hidden py-20 ">
        <div className="container mx-auto max-w-[1320px] px-5">
          <div className="md:w-4/5 lg:w-3/4 md:mx-auto">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
              {portfolioData.mainData.title}
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              {portfolioData.mainData.title2}{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                {portfolioData.mainData.title2Span}
              </span>
            </h2>
            <p className="leading-[1.75] text-white/70 mt-3">
              {portfolioData.mainData.description}
            </p>
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="  gap-10 flex w-full relative ">
        {projectsData.map((pro) => (
          <div key={pro.id} className=" ">
            <ProjectCard data={pro} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
