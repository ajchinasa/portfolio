import ProjectCard from "../../../components/Body/Projects";
import { projects } from "../../../data/body";

const Body = () => {
  return (
    <section className="flex-1 w-full bg-[#2a221c] rounded-[50px] md:rounded-[32px] p-6 md:p-8 lg:p-4">
      <h4 className="text-white font-semibold text-lg md:text-base lg:text-lg mb-10 lg:mb-4 ">
        Personal Projects
      </h4>

      <div className="space-y-16 lg:space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Body;
