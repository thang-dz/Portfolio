import arrowLeftIcon from "@/assets/icons/a-l.svg";
import calendarIcon from "@/assets/icons/calen.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import githubIcon from "@/assets/icons/github.svg";
import htmlIcon from "@/assets/icons/html.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import reactIcon from "@/assets/icons/react.svg";

export { seo } from "@/configurations/seo";

export const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/manh.thang.338636",
    icon: facebookIcon,
    label: "/VuManhThang",
  },
  {
    name: "GitHub",
    href: "https://github.com/thang-dz/",
    icon: githubIcon,
    label: "/VuManhThang",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thang-vu-321b23276/",
    icon: linkedinIcon,
    label: "/VuManhThang",
  },
];

export const skills = [
  { name: "Reactjs", icon: reactIcon },
  { name: "HTML/CSS", icon: htmlIcon },
  { name: "Nodejs", icon: nodejsIcon },
];

export const projects = [
  {
    id: 1,
    name: "Words To Images",
    des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
    skill: "React",
    color: "bg-blue-600",
    herf: "https://github.com/thang-dz/wordToImage",
    icon: arrowLeftIcon,
  },
  {
    id: 2,
    name: "Words To Images",
    des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
    skill: "React",
    color: "bg-blue-600",
    herf: "https://github.com/thang-dz/wordToImage",
    icon: arrowLeftIcon,
  },
  {
    id: 3,
    name: "Words To Images",
    des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
    skill: "React",
    color: "bg-blue-600",
    herf: "https://github.com/thang-dz/wordToImage",
    icon: arrowLeftIcon,
  },
  {
    id: 4,
    name: "Words To Images",
    des: "A simple tool to satisfy your passion for creating comics, transforming written stories into comics",
    skill: "React",
    color: "bg-blue-600",
    herf: "https://github.com/thang-dz/wordToImage",
    icon: arrowLeftIcon,
  },
];

export const workExperiences = [
  {
    id: 1,
    role: "Intern FullStack",
    company: "Fabbi Software",
    period: "01/2026 - Present",
    summary: "Excited and enthusiastic upon joining the company",
    logo: "/logo.webp",
    logoAlt: "Fabbi Software logo",
    calendarIcon: calendarIcon,
    gallery: [{ src: "/company.webp", alt: "Fabbi Software office" }],
  },
];

export const aboutText =
  "I am currently a Fullstack Intern, with my main responsibilities focused on basic Frontend development. Although my current tasks involve simple features, I see this as an important foundation for understanding how a web application works from the user interface to the overall user experience. Driven by a strong passion for technology, I aim to gradually expand my skills into Backend development and system design, with the goal of becoming a well-rounded Fullstack Developer in the future!";
