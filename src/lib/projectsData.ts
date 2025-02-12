export interface ProjectProps {
  id: number;
  image: string;
  title: string;
  description: string;
  techStack: string[];
  livePreview: string;
  github: string;
}

const projectsData: ProjectProps[] = [
  {
    id: 1,
    image: "/projects/1.png",
    title: "Aktar Paulin Sheds",
    description:
      "A website for Aktar Paulin Sheds, showcasing industrial and commercial shed solutions.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    livePreview: "https://aktarpaulinsheds.com",
    github: "#",
  },
  {
    id: 2,
    image: "/projects/2.png",
    title: "Ashma Enterprises",
    description:
      "A business website for Ashma Enterprises, highlighting their services and products.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    livePreview: "https://ashmaenterprises.com/",
    github: "#",
  },
  {
    id: 3,
    image: "/projects/3.png",
    title: "Honest Haven",
    description:
      "A platform offering real estate solutions and property listings with seamless navigation.",
    techStack: ["React", "Redux", "Firebase"],
    livePreview: "https://honesthaven.in",
    github: "#",
  },
  {
    id: 4,
    image: "/projects/4.png",
    title: "Maps Venture",
    description:
      "An interactive maps and travel platform helping users discover new destinations.",
    techStack: ["React", "API Integration", "Tailwind CSS"],
    livePreview: "https://mapsventure.in/",
    github: "#",
  },
  {
    id: 5,
    image: "/projects/5.png",
    title: "MRM Decors",
    description:
      "A website showcasing MRM Decors' premium interior and exterior decoration services.",
    techStack: ["Next.js", "MongoDB", "Express"],
    livePreview: "https://mrmdecors.com/",
    github: "#",
  },

  {
    id: 6,
    image: "/projects/6.png",
    title: "Tech Solutions Hub",
    description:
      "A landing page for a tech consultancy offering software development and cloud solutions.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    livePreview: "#",
    github: "#",
  },
  // {
  //   id: 7,
  //   image: "/projects/1.png",
  //   title: "Food Delivery App",
  //   description:
  //     "A demo food delivery app showcasing menu browsing, order tracking, and online payments.",
  //   techStack: ["Flutter", "Firebase", "Node.js"],
  //   livePreview: "#",
  //   github: "#",
  // },
];

export default projectsData;
