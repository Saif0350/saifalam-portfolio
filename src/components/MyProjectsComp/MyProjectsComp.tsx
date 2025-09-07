"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProjectCard2 } from "./ProjectCard2";
import projectsData from "@/lib/projectsData";

const MyProjectsComp = () => {
  return (
    <div id="portfolio" className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-start mb-12"
        >
          {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my latest work and side projects
          </p> */}
          <div className="w-full lg:w-1/3">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
              My Projects
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              My Latest{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                Work
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard2 key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjectsComp;
