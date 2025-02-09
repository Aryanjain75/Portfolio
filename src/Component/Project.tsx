/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PinContainer } from "./Pincard";

interface ProjectProps {
  title: string;
  description: string;
  href: string;
}

interface ProjectsSectionProps {
    id: string;
  projects: ProjectProps[];
  darkMode: boolean;
}

function Projects({id, projects, darkMode }: ProjectsSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      id={id}

      className={`px-6 py-16 transition-colors duration-300 ${
        darkMode ? "bg-gradient-to-r from-gray-900 to-black" : "bg-white"
      }`}
    >
      <motion.h1
        className={`text-5xl md:text-7xl font-bold text-center mb-12 ${
          darkMode ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
              <PinContainer key={index} title={project.title} href={project.href}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">{project.description}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg overflow-hidden mt-4 border-0">
                    <iframe
                      src={project.href}
                      className="w-full h-full border-0 rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </PinContainer>
            ))}
      </div>
    </section>
  );
}

export default Projects;
