import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  rma,
  elekon,
  dutacs,
  bisoft,
  docker,
  meta,
  tesla,
  sunex,
  simsoft,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  android,
  bootstrap,
  clang,
  csharp,
  cpp,
  java,
  sass,
  bookmark,
  chicken,
  union,
  securent,
  bsposform,
  posui,
  sassfigma,
} from "../assets";

export const navLinks = [
  {
    id: "gifty",
    title: "MY FAVORITE PROJECT: GIFTY",
    external: true,
    href: "https://ledauphinn.github.io/gifty",
    rainbow: true, // renders as the animated rainbow button
  },
  {
    id: "cv",
    title: "CV",
    external: true,
    href: "/resume.pdf" // <-- updated to point to the PDF
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: clang,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Android Studio",
    icon: android,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Fullstack Web Developer",
    company_name: "DuTACS GmbH · Full time (on-site)",
    icon: dutacs,
    iconBg: "#E6DEDD",
    date: "May 2026 - Present",
    points: [
      "Development of a multilingual website for Five Bays Resort (fivebaysresort.com), a luxury resort on Turkey's Mediterranean coast, on a custom content management system built from scratch as a PHP 8 MVC application with no framework dependency.",
      "The system provides a block-based page builder with reusable UI components, a media library and an admin panel for pages, villas, blog posts and site settings.",
      "The front-end is written in vanilla JavaScript and CSS with a mobile-first, responsive approach, and the site is served in three languages via a translation API.",
      "Form submissions pass spam and validation checks before being posted to the resort's CRM over its REST API. Apache/Plesk hosting, SMTP, cron jobs, and SEO configuration were also part of the responsibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "BiSoft Information Technologies · Full time",
    icon: bisoft,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Feb 2026",
    points: [
      "Frontend contributions to the product Vispeahen, a large-scale project built with ReactJS via TypeScript on the frontend and Spring Boot on the backend, mostly including class-based components.",
      "Vispeahen helps customers manage their big data (SQL/xlsx/csv) through user-friendly dashboards — charts and graph plugins — via custom filtering and sorting of database tables.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Elekon Smart Building Technologies · Full time",
    icon: elekon,
    iconBg: "#E6DEDD",
    date: "May 2025 - Sep 2025",
    points: [
      "Development of user-interfaces for long-range IoT communication and a customized file management system, using NextJS via TypeScript. For the development process, the protocols of MQTT and LoRaWAN were used.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "RMA Yapı · Freelance",
    icon: rma,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Apr 2025",
    points: [
      "Implementation of a Custom CRM (Customer Relationship Management) System for RMA Yapı Team",
      "The Five Bays Resort Hotel in Mersin, Silifke, needed a customizable and functional CRM system. Responsibility was to develop the CRM modules on the frontend using ReactJS via TypeScript and contribute to the unit tests and functionality tests of the modules.",
    ],
  },
  {
    title: "Testing and Development (Frontend)",
    company_name: "SunExpress · Internship",
    icon: sunex,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Contributing to the InFlight Retail Ecosystem:",
      "Testing and development on the BackOffice Website",
      "Testing and debugging on the EPOS Mobile Application",
      "Participating in test reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "SIMSOFT Computer Technologies · Internship",
    icon: simsoft,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Game development of 2 different hyper casual videogames:",
      "Developing an emoji-based puzzle game",
      "Contributing the UI development of a desk organizer game"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Senior Design Project · SecuRent",
    description:
      "SecuRent is a web application which enhances the house rental process as well as addressing the issues that are related with the house rental process. SecuRent application emerges as a pioneering solution designed to transform the dynamics between tenants and landlords.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: securent,
    source_code_link: "https://github.com/ArdaYildiz1/SecuRent",
  },
  {
    name: "Bookmark App",
    description:
      "The bookmarking application provides its users to add their favorite websites to their bookmarks list, and they can also share their bookmarks as JSON format to other users so that they can append other users' bookmarks list to their own list.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: bookmark,
    source_code_link: "https://github.com/LeDauphinn/bookmark-app",
  },
  {
    name: "unI0n",
    description:
      "unI0n is a mobile application for university students to interact with each other over their common questions and interests. They can arrange meetings and social events.",
    tags: [
      {
        name: "androidstudio",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: union,
    source_code_link: "https://github.com/trelans/UnionApp",
  },
];
const projects2 = [
  {
    name: "Web Design · Sass & Figma",
    description:
      "This is a copy website designed via html, bootstrap and sass. I have implemented a figma design sheet, which can be found in the README of the repository.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: sassfigma,
    source_code_link: "https://github.com/LeDauphinn/ojs-sass-figma",
  },
  {
    name: "Web Design · Bootstrap, Positioning, Forms & Pseudo Elements",
    description:
      "This project is a copy website designed via html, css and bootstrap. I have re-implemented a template website, which can be found in the README of the repository.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bsposform,
    source_code_link: "https://github.com/LeDauphinn/ojs-bs-pos-form-pseudo",
  },
  {
    name: "Web Design · Positioning & User Interface",
    description:
      "This is a copy website designed via html, css and bootstrap. I have copied a template bootstrap website, which can be found in the README of the repository.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: posui,
    source_code_link: "https://github.com/LeDauphinn/ojs-pos-ui",
  },
];

export { services, technologies, experiences, testimonials, projects, projects2 };