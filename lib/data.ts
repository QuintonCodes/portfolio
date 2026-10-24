import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

export const details = {
  title: "Hello I'm",
  role: "Software Engineer Intern",
  name: "Kagiso Jiyane",
  phone: "+27697874817",
  location: "Pretoria, Gauteng",
  hero_description:
    "Enthusiastic Software Engineering Graduate and Software Engineer Intern with a genuine passion for writing clean code.",
  links: [
    {
      icon: FaGithub,
      path: "https://github.com/QuintonCodes",
    },
    {
      icon: FaStackOverflow,
      path: "https://stackoverflow.com/users/21905567/quinton",
    },
    {
      icon: FaLinkedinIn,
      path: "https://www.linkedin.com/in/kagiso-jiyane",
    },
    {
      icon: FaTwitter,
      path: "https://x.com/quinton_dev",
    },
  ],
  imageURL: "/me.webp",
  email: "kagisojiyane28@gmail.com",
};

export const initialStats = [
  { num: 0, text: "Projects completed" },
  { num: 0, text: "Technologies mastered" },
  { num: 0, text: "Code commits" },
];

export const sections = [
  "hero",
  "experience",
  "skills",
  "projects",
  "education",
  "contact",
];

export const skills = {
  frontend: [
    {
      title: "Next.js",
      level: 9,
    },
    {
      title: "TypeScript",
      level: 8,
    },
    {
      title: "HTML/CSS",
      level: 10,
    },
    {
      title: "Tailwind CSS",
      level: 9,
    },
    {
      title: "React Native (Expo)",
      level: 7,
    },
  ],
  backend: [
    {
      title: "Node.js",
      level: 9,
    },
    {
      title: "C#",
      level: 8,
    },
    {
      title: "Python",
      level: 9,
    },
    {
      title: "SQL",
      level: 8,
    },
    {
      title: "ASP.NET Core",
      level: 7,
    },
  ],
  tools: [
    "Git",
    "GitHub",
    "Vite",
    "Postman",
    "PostgreSQL",
    "Jest",
    "CI/CD",
    "Agile",
    "Neon",
    "Solidity",
    "Docker",
  ],
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  gitHub: string;
  live: string;
};

export const projects: Project[] = [
  {
    title: "EduLite - Mobile LMS",
    description:
      "Full-stack mobile LMS engineered for collaborative studying and resource sharing. Features a scalable Next.js backend, robust data management with Prisma, and Jest unit testing for reliability.",
    stack: [
      "React Native (Expo)",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Jest",
    ],
    gitHub: "https://github.com/QuintonCodes/edulite",
    live: "",
  },
  {
    title: "SwopMarket - E-Commerce Website",
    description:
      "A full-featured online marketplace with shopping cart, payment processing, and admin dashboard for peer-to-peer interaction between buyers & sellers, which aims at reducing communication overhead.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    gitHub: "https://github.com/QuintonCodes/my-projects/tree/main/swop-market",
    live: "https://swop-market.vercel.app",
  },
  {
    title: "TrustBlock - Web3 Escrow Platform",
    description:
      "A decentralized, zero-trust financial utility designed for independent digital workers and their clients. The platform bypasses traditional freelance marketplaces by providing a secure, borderless escrow protocol.",
    stack: ["Next.js", "PostgreSQL", "TailwindCSS", "MetaMask", "Solidity"],
    gitHub: "https://github.com/QuintonCodes/trust-block",
    live: "https://trust-block-ashen.vercel.app/",
  },
];

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export const experience: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Reslocate",
    duration: "Oct 2026 - Present",
    description:
      "Engineered and tested software solutions and technology products to drive digital business development and create measurable organizational value. Executed business analysis, market research, and data analysis to find operational improvements and deliver technology-enabled business solutions.",
  },
  {
    title: "Part-Time Web Developer",
    company: "Caledon Code",
    duration: "Oct 2025 - Nov 2025",
    description:
      "Refactored frontend components using React (Vite) and Tailwind CSS, accelerating page load speeds by 25% across 15+ pixel perfect, Figma-compliant UI components. Delivered a fully functional web prototype meeting 100% of client specifications within a 14-day rapid-delivery sprint, under real world client delivery pressure",
  },
  {
    title: "Full Stack Web Developer",
    company: "Freelance",
    duration: "Feb 2025 - Sept 2025",
    description:
      "Deployed a business website with automated chatbot integration, decreasing manual client inquiries by 80%. Integrated a Web3 payment gateway processing hybrid fiat/crypto transactions across 5+ digital assets,  configuring MetaMask security protocols and keeping 99.9% Vercel deployment stability",
  },
];

export type Education = {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  description: string;
  gpa: number;
  modules: string[];
};

export const education: Education = {
  institution: "Eduvos",
  location: "Pretoria, Gauteng",
  description:
    "Pursued a Bachelor of Science in Information Technology with a specialization in Software Engineering at Eduvos, Pretoria. The program emphasizes practical skills in software development, covering areas such as programming in C#, data structures and algorithms, mobile app development, and software architecture design. Through a blend of theoretical knowledge and hands-on projects, I am building a strong foundation to contribute effectively to the tech industry.",
  degree: "BSc. Information Technology (Software Engineering)",
  duration: "Feb 2023 - May 2026 (Graduated 14 May 2026)",
  modules: [
    "Programming in C#",
    "Data Structures and Algorithms in C#",
    "Mobile App Development",
    "Database Systems",
    "Web Development & e-Commerce",
  ],
  gpa: 3.45,
};
