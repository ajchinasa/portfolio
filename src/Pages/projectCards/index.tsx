import { motion, Variants, Transition } from "framer-motion";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        } as Transition
    }
};

const ProjectsPage = () => {
    return (
        <section className="min-h-screen bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-[#161B26] leading-tight mb-8"
                    >
                        Portfolio Projects
                    </motion.h1>

                    {/* --- ABOUT ME SECTION --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl space-y-4 border-l-2 border-blue-500 pl-6"
                    >
                        <h4 className="text-[#161B26] font-semibold text-xl sm:text-2xl">
                            About me
                        </h4>
                        <p className="text-[#4B5563] text-sm sm:text-lg leading-relaxed">
                            Tech-savvy Customer Experience professional with expertise in frontend
                            development, product operations, and user-focused strategy. Skilled at
                            bridging technology, customer insights, and product innovation to
                            enhance satisfaction and drive growth.
                        </p>
                    </motion.div>
                </header>

                {/* --- PROJECTS GRID --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {/* --- FOOTER / CONTACT --- */}
                <div className="mt-10 pt-10 border-t border-gray-100">
                    <p className="text-[#161B26] font-medium">
                        Say hi to Chinasa at{" "}
                        <a
                            href="mailto:chinasa.ajogu1@gmail.com"
                            className="text-blue-600 hover:underline transition-all"
                        >
                            chinasa.ajogu1@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;