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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my latest work and side projects
          </p>
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
