import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  livePreview: string;
  github: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

export const ProjectCard2 = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="rounded-xl overflow-hidden shadow-lg p-[2px] bg-gradient-to-br from-[#ff82f3] via-[#7b13ff] to-[#400d64]"
      >
        <div className="relative h-56 overflow-hidden rounded-t-lg">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          {/* Hover Overlay with Icons */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
            >
              <LinkIcon className="w-6 h-6 text-gray-900" />
            </a>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 bg-gray-900 rounded-b-xl">
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold text-white mb-2"
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
