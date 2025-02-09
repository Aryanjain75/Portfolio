/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skillset({ id,darkMode }: {id:string, darkMode: boolean }) {
  // Skills data with categories and colors
  const skillCategories = {
    "Programming Languages": {
      color: "from-red-500 to-pink-500",
      skills: ["JavaScript", "TypeScript", "Java"],
    },
    "Frontend Development": {
      color: "from-blue-500 to-indigo-500",
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    "Backend Development": {
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    "Development Tools": {
      color: "from-yellow-500 to-amber-500",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Heroku", "Netlify"],
    },
    "Additional Skills": {
      color: "from-purple-500 to-violet-500",
      skills: [
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "IntelliJ",
        "Eclipse",
        "NetBeans",
        "Canva",
      ],
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`px-6 py-16 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-white/50 text-gray-900"
      }`}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        SKILLS
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Object.entries(skillCategories).map(([category, { color, skills }]) => (
          <motion.div
            key={category}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${
              darkMode
                ? "bg-gray-800 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                : "bg-white shadow-lg"
            }`}
          >
            <div className={`bg-gradient-to-r ${color} p-4`}>
              <h2 className="text-xl font-bold text-white">{category}</h2>
            </div>

            <div className="p-6 relative min-h-[200px]">
              {skills.map((skill, index) => (
                <motion.p
                  key={skill}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`inline-block m-1 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                    darkMode ? "shadow-[0_0_10px_rgba(255,255,255,0.2)]" : ""
                  }`}
                >
                  {skill}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skillset;
