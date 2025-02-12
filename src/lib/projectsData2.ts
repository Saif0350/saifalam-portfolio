export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  livePreview: string;
  github: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description:
      "A modern task management application with AI suggestions and smart categorization. Features include real-time updates, drag-and-drop organization, and intelligent task prioritization.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    techStack: ["React", "TypeScript", "TailwindCSS", "OpenAI API"],
    livePreview: "https://example.com/task-manager",
    github: "https://github.com/example/task-manager",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking. Features a modern UI with dark mode support.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    livePreview: "https://example.com/dashboard",
    github: "https://github.com/example/dashboard",
  },
  {
    id: 3,
    title: "Social Media Analytics",
    description:
      "A powerful analytics platform for social media managers. Track engagement, analyze trends, and generate detailed reports across multiple platforms.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    techStack: ["React", "D3.js", "Firebase", "TailwindCSS"],
    livePreview: "https://example.com/analytics",
    github: "https://github.com/example/analytics",
  },
];
