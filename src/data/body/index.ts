import financeApp from "../../assets/images/financeApp.png";
import adviseGeneratorApp from "../../assets/images/adviseGeneratorApp.png";
import qrCode from "../../assets/images/qrCode.png";
import cardComponent from "../../assets/images/cardComponent.png";
// import registrationLoginPage from "../../assets/images/registrationLoginPage.png";
import carousel from "../../assets/images/carousel.png";
import mentions from "../../assets/images/mentions.png";

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    title: "Finance App",
    description:
      "A personal finance tracker built with React, TypeScript, and Tailwind CSS, featuring donut charts, category filters, and dynamic expense tracking.",
    imageSrc: financeApp,
    projectUrl: "https://frontend-mentor-finance-app.vercel.app/",
  },
  {
    title: "Single Page Mentions Website",
    description:
      "A single-page website built with React and Tailwind CSS to practice clean layouts and scalable UI structure.",
    imageSrc: mentions,
    projectUrl: "https://single-page-mentions-website.vercel.app/",
  },
  {
    title: "Advise Generator App",
    description:
      "A simple advice generator built with TypeScript and vanilla CSS, focusing on API integration and state handling.",
    imageSrc: adviseGeneratorApp,
    projectUrl: "https://advice-generator-lake-five.vercel.app/",
  },
  {
    title: "Carousel",
    description:
      "A responsive carousel built with HTML, CSS, and TypeScript/JS to practice DOM manipulation.",
    imageSrc: carousel,
    projectUrl: "https://registration-login-page-html-css-dz.vercel.app/",
  },
  {
    title: "QR Code",
    description:
      "A responsive QR Code card built with TypeScript and vanilla CSS.",
    imageSrc: qrCode,
    projectUrl: "https://frontend-mentor-qr-code-component-puce.vercel.app/",
  },
  {
    title: "Product Preview Card Component",
    description:
      "A reusable card component built with TypeScript and vanilla CSS.",
    imageSrc: cardComponent,
    projectUrl: "https://frontend-mentor-card-component-solution.vercel.app/",
  },
  // {
  //   title: "Registration/Login Page",
  //   description:
  //     "A clean, responsive registration and login page built with HTML, CSS, and vanilla JavaScript.",
  //   imageSrc: registrationLoginPage,
  //   projectUrl: "https://registration-login-page-html-css.vercel.app/",
  // },
];
