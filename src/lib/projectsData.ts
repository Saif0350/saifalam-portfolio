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
    image: "/projects/7.png",
    title: "Yovant Recruitment Services",
    description:
      "A website for Yovant Recruitment Services showcasing there various types of jobs in middle east and Singapore.",
    techStack: [
      "Next Js",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Typescript",
    ],
    livePreview: "https://yovantrecruitment.com",
    github: "#",
  },
  {
    id: 2,
    image: "/projects/8.png",
    title: "Golden Ratio Clinic",
    description:
      "A business website for Golden Ratio Clinic, showcasing their cosmetic and plastic surgery services and treatments.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "LENIS",
      "Typescript",
    ],
    livePreview: "https://goldenratio.demo-web.live",
    github: "#",
  },
  {
    id: 3,
    image: "/projects/9.png",
    title: "Thaiger Pharma ",
    description:
      "A platform for Thaiger Nutraceuticals, showcasing their medicines, supplements, and health products with seamless navigation.",
    techStack: [
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "LENIS",
      "Typescript",
    ],
    livePreview: "https://thaigernutraceuticals.com",
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
    image: "/projects/10.png",
    title: "Peace Power",
    description:
      "A full-stack platform built for Peace Power to showcase industrial products such as link boxes, SVL, cable rollers, and cable cleats, featuring a scalable backend and modern UI.",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL"],
    livePreview: "https://peacepowerfrontend.demo-web.live/",
    github: "#",
  },
  {
    id: 6,
    image: "/projects/3.png",
    title: "Honest Haven",
    description:
      "A platform offering real estate solutions and property listings with seamless navigation.",
    techStack: ["React", "Redux", "Firebase"],
    livePreview: "https://honesthaven.in",
    github: "#",
  },
];

export default projectsData;
