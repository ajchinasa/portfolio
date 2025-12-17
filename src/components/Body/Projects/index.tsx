import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  projectUrl,
}) => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
      {/* Text */}
      <div className="flex-1 text-left md:text-center lg:text-left">
        <h6 className="text-[#ff6f00] font-semibold text-sm sm:text-base mb-2">
          {title}
        </h6>
        <p className="text-[#f5f1ec] text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto flex justify-center md:justify-end"
      >
        <img
          src={imageSrc}
          alt={`${title} Screenshot`}
          className="
            w-full
            max-w-sm
            sm:max-w-md
            h-auto
            rounded-lg
            hover:scale-105
            transition-transform
            duration-200
          "
        />
      </a>
    </section>
  );
};

export default ProjectCard;
