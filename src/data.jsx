import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import contenfulImg from "./assets/contentful-img.jpg";
import mixmasterImg from "./assets/mixmaster-img.jpg";
import reviewsImg from "./assets/reviews-img.jpg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: mixmasterImg,
    url: "https://mixmaster-by-j4ro.netlify.app/",
    github: "https://github.com/Jaro233/MixMaster-app",
    title: "MixMaster App",
    text: "App where user can search cocktails",
  },
  {
    id: nanoid(),
    img: contenfulImg,
    url: "https://contentful-app-by-j4ro.netlify.app/",
    github: "https://github.com/Jaro233/contentful-app",
    title: "Contentful App",
    text: "App where i used Contenful CMS to present some of my projects",
  },
  {
    id: nanoid(),
    img: reviewsImg,
    url: "https://reviews-by-j4ro.netlify.app/",
    github: "https://github.com/Jaro233/reviews",
    title: "Reviews App",
    text: "User can select reviews from different persons",
  },
];
