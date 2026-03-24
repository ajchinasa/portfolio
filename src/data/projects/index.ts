import Aura from "../../assets/images/projects/mental-health-website-five.vercel.app_.png";
import Finance from "../../assets/images/projects/frontend-mentor-finance-app.vercel.app_.png";
import Mentions from "../../assets/images/projects/single-page-mentions-website.vercel.app_.png";
import AdviceGen from "../../assets/images/projects/advice-generator-lake-five.vercel.app_.png";
import Carousel from "../../assets/images/projects/carousel.png";
import Product from "../../assets/images/projects/frontend-mentor-card-component-solution.vercel.app_.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AuraRest",
    description:
      "A mental health platform focused on cultural familiarity. Features a custom booking system.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    link: "https://mental-health-website-five.vercel.app/#/",
    github: "https://github.com/ajchinasa/mentalHealthWebsite",
    image: Aura,
    featured: true,
  },
  {
    id: 2,
    title: "Finance App",
    description:
      "A personal finance tracker built with React, TypeScript, and Tailwind CSS, featuring donut charts, category filters, and dynamic expense tracking.",
    tags: ["React", "TypeScript", "Tailwind", "Chart", "Vite"],
    link: "https://frontend-mentor-finance-app.vercel.app/",
    github: "https://github.com/ajchinasa/frontend-mentor-finance-app",
    image: Finance,
    featured: false,
  },
  {
    id: 3,
    title: "Mentions Website",
    description:
      "A single-page website built with React and Tailwind CSS to practice clean layouts and scalable UI structure.",
    tags: ["Vite", "Tailwind", "Lucide"],
    link: "https://single-page-mentions-website.vercel.app/",
    github: "https://github.com/ajchinasa/SinglePage-Mentions-Website",
    image: Mentions,
    featured: false,
  },
  {
    id: 4,
    title: "Advice Generator App",
    description:
      "A simple advice generator built with TypeScript and vanilla CSS, focusing on API integration and state handling.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://advice-generator-lake-five.vercel.app/",
    github: "https://github.com/ajchinasa/advice-generator",
    image: AdviceGen,
    featured: false,
  },
  {
    id: 5,
    title: "Carousel",
    description:
      "A responsive carousel built with HTML, CSS, and TypeScript/JS to practice DOM manipulation.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://registration-login-page-html-css-dz.vercel.app/",
    github: "https://github.com/ajchinasa/carousel-HTML-CSS-JS-",
    image: Carousel,
    featured: false,
  },
  {
    id: 6,
    title: "Product Preview Card Component",
    description:
      "A reusable card component built with TypeScript and vanilla CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://frontend-mentor-card-component-solution.vercel.app/",
    github: "https://github.com/ajchinasa/credit-card-LIBRARY-first-test-",
    image: Product,
    featured: false,
  },
];
