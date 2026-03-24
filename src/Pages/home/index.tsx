import ParticlesComponent from "../../components/ParticlesComponent";
import { VscGithub } from "react-icons/vsc";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiFilmScriptFill } from "react-icons/pi";
import ThemeToggle from "../../components/ThemeToggle";
import { NavLink } from "react-router-dom";

interface LinkIconProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}

const LinkIcon = ({ icon, label, href, external }: LinkIconProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center w-12 h-12"
      >
        <div className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
          {icon}
        </div>
        <span className="absolute text-base text-black dark:text-white opacity-0 transition-all duration-300
                         group-hover:opacity-100 group-hover:translate-y-1
                         border border-transparent rounded-xl px-2 py-5 shadow-xl
                         bg-white/80 dark:bg-black/80 backdrop-blur-sm
                         hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
          {label}
        </span>
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      className="group relative inline-flex items-center justify-center w-12 h-12"
    >
      <div className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
        {icon}
      </div>
      <span className="absolute text-base text-black dark:text-white opacity-0 transition-all duration-300
                       group-hover:opacity-100 group-hover:translate-y-1
                       border border-2 border-white dark:border-transparent rounded-xl px-2 py-5 shadow-xl
                       bg-white/80 dark:bg-black/80 backdrop-blur-sm
                       hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
        {label}
      </span>
    </NavLink>
  );
};

const Home = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center text-center
                    bg-white dark:bg-black text-black dark:text-white overflow-hidden gap-14">

      {/* Theme Toggle */}
      <ThemeToggle
        className="
          absolute top-5 right-5 
          p-2 rounded-full 
          bg-white dark:bg-black
          text-black dark:text-white
          z-50
          scale-110 
          shadow-[0_0_25px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_rgba(255,255,255,0.3)]
          transition-transform transition-shadow duration-300
          hover:scale-125 hover:shadow-[0_0_50px_rgba(255,255,255,0.7)]
          active:scale-110
        "
      />

      {/* Particles Background */}
      <ParticlesComponent id="particles" />

      {/* Title */}
      <h1 className="relative text-5xl font-medium mb-2 z-10">Ajogu Chinasa</h1>
      {/* <h2 className="relative text-3xl font-light mb-8 z-10">Front-end Developer</h2> */}

      {/* Links */}
      <div className="flex gap-8 lg:gap-12 relative z-10">
        <LinkIcon
          icon={<BsGrid3X3GapFill className="text-5xl text-black dark:text-white" />}
          label="Projects"
          href="/projects"
        />
        <LinkIcon
          icon={<VscGithub className="text-5xl text-black dark:text-white" />}
          label="GitHub"
          href="https://github.com/ajchinasa"
          external
        />
        <LinkIcon
          icon={<TbBrandLinkedin className="text-5xl text-black dark:text-white" />}
          label="LinkedIn"
          href="https://linkedin.com/in/chinasa-ajogu"
          external
        />
        <LinkIcon
          icon={<PiFilmScriptFill className="text-5xl text-black dark:text-white" />}
          label="Resume"
          href="https://drive.google.com/file/d/17x3KO56WIPH9gDKojcys5YEXT2QZ0MRM/view?usp=sharing"
          external
        />
      </div>
    </div>
  );
};

export default Home;

