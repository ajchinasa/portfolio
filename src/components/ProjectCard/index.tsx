
import { motion, Variants, Transition } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../../data/projects";

export const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
        } as Transition
    }
};

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -10 }}
        className={`group relative bg-[#FAFAFA] border border-[#E5E7EB] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${project.featured ? 'md:col-span-2' : 'col-span-1'
            }`}
    >
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 gap-4">
                <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all text-white border border-white/20">
                    <FaGithub size={22} />
                </a>
                <a href={project.link} className="p-3 bg-white text-[#161B26] rounded-full hover:bg-blue-50 transition-all shadow-lg">
                    <ExternalLink size={22} />
                </a>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
                {project.featured && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded">Featured Project</span>
                )}
            </div>

            <h3 className="text-2xl font-bold text-[#161B26] mb-3">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group/title transition-colors hover:text-blue-600"
                >
                    {project.title}
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500 cursor-pointer" />
                </a>
            </h3>

            <p className="text-[#4B5563] leading-relaxed mb-8 max-w-xl">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                    <span key={tag} className="px-4 py-1.5 bg-white border border-[#E5E7EB] text-[#6B7280] text-xs font-medium rounded-full shadow-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);