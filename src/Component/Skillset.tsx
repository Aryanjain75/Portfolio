/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
function Skillset({ id}: {id:string }) {
  // Skills data with categories and colors
      const icons = useRef<HTMLHeadingElement>(null);
      const containerRef = useRef<HTMLDivElement>(null);
      const titleRef = useRef<HTMLHeadingElement>(null);
      
      useGSAP(()=>{
        if(icons.current && containerRef.current && titleRef.current)
        {
          // Initial setup
          gsap.set(icons.current, { 
            scale: 0,
            opacity: 0
          });
          gsap.set(containerRef.current,{
            scale:1
          })
          gsap.set(titleRef.current, {
            y: -50,
            opacity: 0
          });

          // Title animation
          gsap.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out"
          });

          // Container animation
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power4.out"
          });

          // Icons animation
          gsap.to(icons.current, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            stagger: {
              amount: 0.5,
              from: "random"
            },
            ease: "elastic.out(1, 0.3)"
          });
        }
      })
  const skillCategories = {
    "Programming Languages": {
      color: "from-red-500 to-pink-500",
      skills: [{
        skill:"JavaScript",
        icon:<i className='bx bxl-javascript text-6xl'></i>
      }, 
      {
        skill:"TypeScript",
        icon:<i className='bx bxl-typescript text-6xl'></i>
      },{
        skill: "Java",
        icon:<i className='bx bxl-java text-6xl'></i>
      }],
    },
    "Frontend Development": {
      color: "from-blue-500 to-indigo-500",
      skills: [
         "React.js",
        "Next.js",{
          skill:"HTML",
          icon:<i className='bx bxl-html5 text-6xl'></i>
         },{
          skill:"CSS",
          icon:<i className='bx bxl-css3 text-6xl'></i>
         }, {
          skill:"Tailwind CSS",
          icon:<i className='bx bxl-tailwind-css text-6xl'></i>
         } ],
    },
    "Backend Development": {
      color: "from-green-500 to-emerald-500",
      skills: [{
        skill:"Node.js",
        icon:<i className='bx bxl-nodejs text-6xl'></i>
      },
        "Express.js",{
        skill:"MongoDB",
        icon:<i className='bx bxl-mongodb text-6xl'></i>
      } , {skill:"MySQL",
        icon:<i className='bx bxs-data text-6xl'></i>
      },{
        skill:"Postgresql",
        icon:<i className='bx bxl-postgresql text-6xl'></i>
      }],
    },
    "Development Tools": {
      color: "from-yellow-500 to-amber-500",
      skills: [{
        skill:"Git",
        icon:<i className='bx bxl-git text-6xl'></i>
      },{
        skill:"GitHub",
        icon:<i className='bx bxl-github text-6xl'></i>
      }, "VS Code","Postman","Netlify"],
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
      className={`px-6 py-16 transition-colors duration-300`}
    >
      <motion.h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        SKILLS
      </motion.h1>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Object.entries(skillCategories).map(([category, { color, skills }]) => (
          <motion.div
            key={category}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-gray-800 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            }`}
          >
            <div className={`bg-gradient-to-r ${color} p-4`}>
              <h2 className="text-xl font-bold text-white">{category}</h2>
            </div>

            <div className="p-6 relative min-h-[200px] grid md:grid-cols-2 lg:grid-cols-3">
              {skills.map((sk, index) => (
                <motion.div
                  key={typeof sk === 'string' ? sk : sk.skill}
                  initial={{ x: -20, opacity: 0 }}
                  ref={icons}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`flex flex-col items-center rounded-2xl w-auto m-1 p-1 justify-center bg-gradient-to-r ${color} text-white text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 
                  }`}
                >
                  <div>
                  {typeof sk === 'string' ? <p className="text-lg">
{                  sk}                  </p> : sk.icon}      
                  </div>
                  <div>
                  {typeof sk === 'string' ? "" : sk.skill}      
                  </div>
          </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skillset;
