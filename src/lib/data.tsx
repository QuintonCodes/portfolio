import {
  FaCss3,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaNode,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { ServiceProps, StatsProps } from "./types";

export const initialStats: StatsProps[] = [
  { num: 3, text: "Years of coding experience" },
  { num: 0, text: "Projects completed" },
  { num: 0, text: "Technologies mastered" },
  { num: 0, text: "Code commits" },
];

export const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const heroData = {
  title: "Hello I'm",
  subtitle: "Kagiso Jiyane",
  description:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  role: "Junior Software Engineer",
};

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/QuintonCodes" },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/21905567/quinton",
  },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kagiso-jiyane" },
  { icon: <FaTwitter />, path: "https://x.com/quinton_dev" },
];

export const skills = {
  title: "My skills",
  description: "An overview of my best strengths",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaNode />, name: "node.js" },
    { icon: <FaPython />, name: "python" },
    { icon: <FaReact />, name: "react" },
    { icon: <FaGit />, name: "git" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <SiTypescript />, name: "typescript" },
    { icon: <TbBrandCSharp />, name: "c#" },
  ],
};

export const experience = [
  {
    company: "San Carlo",
    position: "Private Tutor",
    duration: "01/2024 - 11/2024",
  },
];

export const education = [
  {
    institution: "Eduvos",
    degree: "Bachelor's Degree in IT (Software Engineering)",
    duration: "02/2023 - present",
  },
  {
    institution: "Hoerskool Pretoria Wes",
    degree: "Bachelor's Pass in Highschool",
    duration: "01/2018 - 12/2022",
  },
];

export const aboutData = {
  title: "About me",
  description: "A full description about myself",
  info: [
    { fieldName: "Name", fieldValue: "Kagiso Jiyane" },
    { fieldName: "Phone", fieldValue: "(+27) 69 787 4817" },
    { fieldName: "Work Experience", fieldValue: "1 Year" },
    { fieldName: "Nationality", fieldValue: "South African" },
    { fieldName: "Email", fieldValue: "kagisojiyane28@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Afrikaans & Sepedi" },
  ],
};

export const services: ServiceProps[] = [
  {
    num: "01",
    title: "Web Development",
    description: "Developing the frontend and backend for websites",
  },
  {
    num: "02",
    title: "Logo Design",
    description: "Creating logos for businesses for any use case",
  },
  {
    num: "03",
    title: "Software Development",
    description: "Writing and maintaining software code for applications",
  },
];

export const projectsData = [
  {
    num: "01",
    category: "fullstack",
    title: "kickFlip e-commerce website",
    description:
      "E-Commerce clothing store website for a street brand named KickFlip",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
    ],
    image: "/work/thumb1.png",
    live: "",
    github: "https://github.com/QuintonCodes/My-Projects/tree/main/kickflip",
  },
  {
    num: "02",
    category: "frontend",
    title: "spotify api website",
    description:
      "A website using spotify's APIs to provide users with customized music",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },
    ],
    image: "/work/thumb2.png",
    live: "",
    github: "https://github.com/QuintonCodes/My-Projects/tree/main/spotify-app",
  },
  {
    num: "03",
    category: "backend",
    title: "asp.net core api",
    description: "An API created using C# for the spotify API website",
    stack: [{ name: "C#" }, { name: "ASP.NET Core" }, { name: "SQL" }],
    image: "/work/thumb3.png",
    live: "",
    github:
      "https://github.com/QuintonCodes/My-Projects/tree/main/csharp-web-api",
  },
];

export const contactData = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+27) 69 787 4817" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kagisojiyane28@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "327 Frederick Street, Pretoria West",
  },
];
