import HeroAvatar from "../../public/images/my_photu.jpg";
import ClientLogo from "../../public/images/client-logo.jpg";
import BlogImg from "../../public/images/blog-img.jpg";
import BlogImg2x from "../../public/images/blog-img@2x.jpg";
import BlogImgWide from "../../public/images/blog-img-wide.jpg";
import PortfolioImg from "../../public/images/portfolio-img.jpg";
import PortfolioImgWide from "../../public/images/portfolio-img-wide.jpg";
import {
  Brush,
  Code,
  Instagram,
  Linkedin,
  Smartphone,
  Twitter,
} from "lucide-react";

export const headerData = {
  logo: "Saif Alam",
  navlinks: [
    {
      url: "/#about",
      title: "About",
    },
    {
      url: "/#services",
      title: "Services",
    },
    {
      url: "/#portfolio",
      title: "Portfolio",
    },
    {
      url: "/#awards",
      title: "Awards",
    },

    {
      url: "/#contact",
      title: "Contact",
    },
  ],
};

export const aboutData = {
  mainData: {
    name: "Saif Alam Ansari",
    heroAvatar: HeroAvatar,
    biography:
      "With 4 years of experience, I specialize in Web Development, UI/UX Design and App Development. My goal is to craft high-performing digital solutions that help businesses thrive.",
    projectsDone: "50",
    yearsOfExperience: "4",
    worldwideClients: "10",
  },
  skills: [
    { name: "Web Development" },
    { name: "UI & UX Design" },
    { name: "App Development" },
    { name: "SEO" },
    { name: "Management" },
  ],
  connect: [
    {
      url: "https://linkedin.com/in/saifalamansari",
      icon: Linkedin, // Lucide-react Facebook icon
    },
    {
      url: "#",
      icon: Twitter, // Lucide-react Twitter icon
    },
    {
      url: "#",
      icon: Instagram, // Lucide-react Instagram icon
    },
  ],
};

export const servicesData = {
  mainData: {
    title: "Services",
    title2: "What I",
    title2Span: "Do",
  },
  services: [
    {
      number: "01",
      icon: Brush, // Store the icon as a reference, not as JSX
      title: "Design",
      description:
        "I create visually stunning and user-friendly designs that enhance brand identity and improve user engagement. From UI/UX design to branding, my focus is on delivering aesthetically pleasing and functional solutions.",
    },
    {
      number: "02",
      icon: Code,
      title: "Development",
      description:
        "I build high-performance, scalable, and responsive websites using modern technologies. Whether it's front-end or back-end development, I ensure clean, efficient, and maintainable code that meets industry standards.",
    },
    {
      number: "03",
      icon: Smartphone,
      title: "App Development",
      description:
        "I develop robust and intuitive mobile applications for iOS and Android platforms. My approach focuses on seamless user experiences, performance optimization, and leveraging the latest frameworks to bring ideas to life.",
    },
  ],
};

export const clientsData = {
  clients: [
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
    {
      url: "#",
      logo: ClientLogo,
    },
  ],
};

export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "Recent",
    title2Span: "Works",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  projects: [
    {
      title: "Project Title 1",
      slug: "project-title-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 2",
      slug: "project-title-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 3",
      slug: "project-title-3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 4",
      slug: "project-title-4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: true,
    },
    {
      title: "Project Title 5",
      slug: "project-title-5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: false,
    },
    {
      title: "Project Title 6",
      slug: "project-title-6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
      services: [{ name: "Item" }, { name: "Item" }],
      client: "FlaTheme",
      duration: "235 Hours",
      projectLink: {
        title: "www.flatheme.net",
        url: "https://www.flatheme.net",
      },
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: {
        image: PortfolioImg,
        alt: "Image Alt",
      },
      video: {
        thumbnail: PortfolioImg,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      trending: false,
    },
  ],
};

export const blogData = {
  mainData: {
    title: "Journal",
    title2: "Blog",
    title2Span: "Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  posts: [
    {
      title: "Blog Post Title",
      slug: "blog-post-title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
  ],
};

export const achievementsData = {
  mainData: {
    title: "Achievements",
    title2: "My",
    title2Span: "Journey",
  },
  achievements: [
    {
      title: "Top 1% React Developer",
      date: "2024",
      description:
        "Recognized among the top 1% of React developers worldwide for delivering high-performance, scalable web applications.",
    },
    {
      title: "Best UI/UX Designer",
      date: "2023",
      description:
        "Awarded for outstanding UI/UX design expertise, creating intuitive and visually appealing web experiences.",
    },
    {
      title: "Built 50+ Web Projects",
      date: "2022",
      description:
        "Successfully delivered over 50+ projects, helping businesses and startups build their online presence with modern web solutions.",
    },
    {
      title: "10+ Satisfied Clients",
      date: "2021",
      description:
        "Achieved a milestone of 10+ global clients, delivering top-notch web applications and seamless user experiences.",
    },
  ],
};

export const contactData = {
  mainData: {
    title: "Contact",
    title2: "Let's",
    title2Span: "Talk",
    phone: "+91 9136858496",
    email: "saifalam.st@gmail.com",
  },
};

export const mapData = {
  mainData: {
    lat: -3.745,
    lng: -38.523,
  },
};

export const footerData = {
  copyWriteText: "Made with Love By Developer Saif, All Rights Reserved.",
};
