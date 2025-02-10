import HeroAvatar from "../../public/images/my_photu.jpg";
import ClientLogo from "../../public/images/client-logo.jpg";
import BlogImg from "../../public/images/blog-img.jpg";
import BlogImg2x from "../../public/images/blog-img@2x.jpg";
import BlogImgWide from "../../public/images/blog-img-wide.jpg";
import PortfolioImg from "../../public/images/portfolio-img.jpg";
import PortfolioImgWide from "../../public/images/portfolio-img-wide.jpg";
import TestimonialAvatar from "../../public/images/testimonial-avatar.jpg";

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
      url: "/#testimonial",
      title: "Testimonial",
    },
    {
      url: "/#blog",
      title: "Blog",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    projectsDone: "432",
    yearsOfExperience: "13",
    worldwideClients: "900",
  },
  skills: [
    {
      name: "Web Development",
    },
    {
      name: "UI & UX Design",
    },
    {
      name: "Marketing",
    },
    {
      name: "SEO",
    },
    {
      name: "Management",
    },
  ],
  connect: [
    {
      url: "#",
      bootstrapIcon: "bi bi-facebook",
    },
    {
      url: "#",
      bootstrapIcon: "bi bi-twitter-x",
    },
    {
      url: "#",
      bootstrapIcon: "bi bi-instagram",
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
      bootstrapIcon: "bi bi-brush",
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      number: "02",
      bootstrapIcon: "bi bi-code-slash",
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      number: "03",
      bootstrapIcon: "bi bi-laptop",
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
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

export const awardsData = {
  mainData: {
    title: "Achievements",
    title2: "Awa",
    title2Span: "rds",
  },
  awards: [
    {
      title: "Best Designer of the Month",
      date: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      title: "The True Gem",
      date: "2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "First Class Performer",
      date: "2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      title: "Customers Favourite",
      date: "2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ],
};

export const testimonialData = {
  testimonial: [
    {
      name: "Alexander Warren",
      avatar: TestimonialAvatar,
      jobTitle: "CTO - Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      name: "Alexander Warren",
      avatar: TestimonialAvatar,
      jobTitle: "CTO - Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ],
};

export const contactData = {
  mainData: {
    title: "Contact",
    title2: "Let's",
    title2Span: "Talk",
    phone: "+123 456 7890",
    email: "contact@flatheme.net",
  },
};

export const mapData = {
  mainData: {
    lat: -3.745,
    lng: -38.523,
  },
};

export const footerData = {
  copyWriteText: "Developer Saif, All Rights Reserved.",
};
